import * as _ from 'lodash';
import { getValidationControl } from './getValidationControl';
import { getValue } from './getValue';
import { Visibilities } from '../api/visibilities';
import { FormState, ControlName, FormValue } from '../types';

export type ValidateParams = {
  formState: FormState;
  updateValidation: boolean;
  callback?: Function;
  fromSetValue: boolean;
  updateFormState: (updateFormState: FormState) => any;
  getVisibilities: Visibilities;
};
export type Validate = (params: ValidateParams) => FormState;

export const validate: Validate = ({
  formState,
  updateValidation,
  callback,
  fromSetValue,
  updateFormState,
  getVisibilities
}) => {
  const cloneRules = {};
  let formIsValid = true;
  const visibilities = getVisibilities({ getFormState: () => formState });

  const getNotVisibleInputs = () => {
    return Object.keys(formState.formValue).filter(
      (controlName: ControlName) => {
        const isVisible = visibilities.getVisibilityControl(controlName).isVisible;
        return !isVisible;
      }
    );
  };

  const getValueForm = (formState: FormState): FormValue => {
    const formValue = _.cloneDeep(formState.formValue);
    const notVisibleInputs = getNotVisibleInputs();
    notVisibleInputs.forEach((controlName: ControlName) => {
      delete formValue[controlName];
    });
    return formValue;
  };

  if (formState.rules) {
    Object.keys(formState.rules).forEach((controlName: ControlName) => {
      const resultValidationControl = getValidationControl({
        formState,
        controlName,
        controlValue: getValue({ formState, controlName })
      });
      if (resultValidationControl) {
        // the input is ignored if input not visible
        const isVisible = visibilities.getVisibilityControl(controlName)
          .isVisible;
        if (!resultValidationControl.validationStatus && isVisible) {
          formIsValid = false;
        }
        cloneRules[controlName] = resultValidationControl.rulesControl;
      }
    });
   
    if (!_.isEqual(formState.rules, cloneRules) || fromSetValue) {
      let _formState: FormState;
      if (fromSetValue) {
        _formState = formState;
      } else {
        _formState = _.cloneDeep(formState);
      }
      _formState.valid = formIsValid;
      _formState.rules = cloneRules;
      console.log(_formState.rules, '_formState.rules')
      if (updateValidation) {
        updateFormState(_formState);
      }
      if (typeof callback === 'function') {
        callback(_formState.valid, getValueForm(_formState));
      }
      return _formState;
    }
  }
  if (typeof callback === 'function') {
    callback(formState.valid, getValueForm(formState));
  }
  return formState;
};
