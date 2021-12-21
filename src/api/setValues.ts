import * as _ from 'lodash';
import { validate } from './validate';
import { Visibilities } from '../api/visibilities';
import { UpdateFormState } from '../api/useStateForm';
import { FormState, FormValue, ControlName } from '../types';

export type SetValuesParams = {
  formState: FormState;
  controlsValues: FormValue;
  updateFormState: UpdateFormState;
  getVisibilities: Visibilities;
  editMode?: boolean;
  getFormState: () => FormState;
};
export type SetValues = (params: SetValuesParams) => FormState | false;

export const setValues: SetValues = ({
  formState,
  controlsValues,
  updateFormState,
  getVisibilities,
  editMode,
  getFormState
}) => {
  const _formState: FormState = _.cloneDeep(formState);
  Object.keys(controlsValues).forEach((controlName: ControlName) => {
    _formState[controlName] = controlsValues[controlName];
  });
  if (_formState.valid === null && !editMode) {
    if (!_.isEqual(_formState, formState)) {
      updateFormState(_formState);
    }
    return _formState;
  } else {
    if((editMode && !_.isEqual(_formState, formState)) || !editMode){
      console.log("setValues", _formState, formState);
      return validate({
        formState: _formState,
        updateValidation: true,
        fromSetValue: true,
        updateFormState,
        getVisibilities,
        getFormState,
        editMode,
      });
    } else {
      return formState
    }
  }
  // return false;
};
