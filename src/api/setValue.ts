import * as _ from 'lodash';
import {getValue} from "./";
import { validate } from './validate';
import { FormState, ControlName, ControlValue, GroupControlId } from '../types';
import { Visibilities } from '../api/visibilities';
import { UpdateFormState } from './useStateForm';

export type SetValueParams = {
  formState: FormState;
  controlName: ControlName;
  groupControlId?: GroupControlId,
  controlValue: ControlValue;
  updateFormState: UpdateFormState;
  skipUpdate: boolean | undefined;
  getVisibilities: Visibilities;
};

export type SetValue = (params: SetValueParams) => FormState | false;

export const setValue: SetValue = ({
  formState,
  controlName,
  groupControlId,
  controlValue,
  updateFormState,
  skipUpdate,
  getVisibilities
}) => {
  const valueFromForm = getValue({formState, controlName, groupControlId});
  if (!_.isEqual(controlValue, valueFromForm)) {
    const _formState: FormState = _.cloneDeep(formState);
    const newValue = _formState.formValue[controlName];
    if(groupControlId && Array.isArray(newValue)){
      console.log(groupControlId, 'groupControlId');
      newValue.some((v) => {
        if(v.id === groupControlId){
          v.value = controlValue;
          //_formState.formValue[controlName] = newValue;
          return true;
        }
        return false;
      });
    } else {
      _formState.formValue[controlName] = controlValue;
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
