import * as _ from 'lodash';
import { getValue } from './getValue';
import { validate } from './validate';
import { FormState, InputName, InputValue, GroupInputId } from '../types';
import { Visibilities } from '../api/visibilities';
import { UpdateFormState } from './useStateForm';

export type SetValueParams = {
  formState: FormState;
  inputName: InputName;
  groupInputId?: GroupInputId;
  inputValue: InputValue;
  updateFormState: UpdateFormState;
  skipUpdate: boolean | undefined;
  getVisibilities: Visibilities;
};

export type SetValue = (params: SetValueParams) => FormState | false;

export const setValue: SetValue = ({
  formState,
  inputName,
  groupInputId,
  inputValue,
  updateFormState,
  skipUpdate,
  getVisibilities
}) => {
  const valueFromForm = getValue({ formState, inputName, groupInputId });
  if (!_.isEqual(inputValue, valueFromForm)) {
    const _formState: FormState = _.cloneDeep(formState);
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
    if (_formState.valid === null) {
      updateFormState(_formState, skipUpdate);
      return _formState;
    } else {
      return validate({
        formState: _formState,
        updateValidation: true,
        fromSetValue: true,
        updateFormState,
        getVisibilities
      });
    }
  }
  return false;
};