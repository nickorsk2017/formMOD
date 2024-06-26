import { cloneDeep, isEqual } from '../utils';
import { getValue } from './getValue';
import { validate } from './validate';
import { FormState, InputName, InputValue, GroupInputId } from '../types';
import { Visibilities } from '../api/visibilities';
import { UpdateFormState } from './useStateForm';

export type SetValueProps = {
  formState: FormState;
  inputName: InputName;
  groupInputId?: GroupInputId;
  inputValue: InputValue;
  updateFormState: UpdateFormState;
  skipUpdate: boolean | undefined;
  getVisibilities: Visibilities;
  skipValidation?: boolean;
  getFormState?: () => FormState;
};

export type SetValue = (params: SetValueProps) => FormState | false;

export const setValue: SetValue = ({
  formState,
  inputName,
  groupInputId,
  inputValue,
  updateFormState,
  skipUpdate,
  getVisibilities,
  skipValidation,
  getFormState
}) => {
  const valueFromForm = getValue({ formState, inputName, groupInputId });
  if (!isEqual(inputValue, valueFromForm)) {
    const _formState: FormState = cloneDeep(formState) as FormState;
    const newValue = _formState.formValue[inputName];
    if (groupInputId && Array.isArray(newValue)) {
      newValue.some((v) => {
        if (v.id === groupInputId) {
          v.value = inputValue;
          //_formState.formValue[inputName] = newValue;
          return true;
        }
        return false;
      });
    } else {
      _formState.formValue[inputName] = inputValue;
    }

    if (_formState.onFly) {
      _formState.onFlyTouched = [..._formState.onFlyTouched, inputName];
    }

    if (!_formState.onFly && (_formState.valid === null || skipValidation)) {
      updateFormState(_formState, { skipUpdate });
      return _formState;
    } else {
      return validate({
        formState: _formState,
        updateValidation: true,
        fromSetValue: true,
        updateFormState,
        getVisibilities,
        skipUpdate,
        getFormState
      });
    }
  }

  return false;
};
