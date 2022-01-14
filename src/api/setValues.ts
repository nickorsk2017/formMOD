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
  editMode?: boolean;
  getFormState: () => FormState;
  isOnInitEdit: boolean;
};
export type SetValues = (params: SetValuesParams) => FormState | false;

export const setValues: SetValues = ({
  formState,
  inputsValues,
  updateFormState,
  getVisibilities,
  editMode,
  getFormState,
  isOnInitEdit
}) => {
  const _formState: FormState = cloneDeep(formState) as FormState;
  Object.keys(inputsValues).forEach((inputName: InputName) => {
    _formState[inputName] = inputsValues[inputName];
  });

  //cancell update state each render for edit mode
  // this state must update only first render
  if (editMode && isOnInitEdit) {
    return formState;
  }

  if (_formState.valid === null && !editMode) {
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
        editMode
      });
    } else {
      return formState;
    }
  }
  // return false;
};
