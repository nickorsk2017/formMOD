import { cloneDeep, isEqual } from '../utils';
import { validate } from './validate';
import { Visibilities } from '../api/visibilities';
import { UpdateFormState } from '../api/useStateForm';
import { FormState, FormValue, InputName } from '../types';

export type SetValuesParams = {
  formState: FormState;
  inputsValues: FormValue;
  updateFormState: UpdateFormState;
  getVisibilities: Visibilities;
  skipUpdate?: boolean;
  init?: boolean;
  getFormState: () => FormState;
  isOnInitEdit: boolean;
};
export type SetValues = (params: SetValuesParams) => FormState | false;

export const setValues: SetValues = ({
  formState,
  inputsValues,
  updateFormState,
  getVisibilities,
  skipUpdate,
  init,
  getFormState,
  isOnInitEdit
}) => {
  const _formState: FormState = cloneDeep(formState) as FormState;
  Object.keys(inputsValues).forEach((inputName: InputName) => {
    _formState.formValue[inputName] = inputsValues[inputName];
  });

  //cancell double rendering and validation on init form value
  if (init && isOnInitEdit) {
    return formState;
  }

  //skip validation if form init with epmty value
  if (_formState.valid === null && !init) {
    if (!isEqual(_formState, formState)) {
      updateFormState(_formState);
    }
    return _formState;
  } else {
    if (!isEqual(_formState, formState)) {
      return validate({
        formState: _formState,
        updateValidation: true,
        fromSetValue: true,
        updateFormState,
        getVisibilities,
        getFormState,
        skipUpdate,
        init
      });
    } else {
      return formState;
    }
  }
  // return false;
};
