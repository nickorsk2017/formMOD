import { cloneDeep, isEqual } from '../utils';
import { getValidationInput } from './getValidationInput';
import { getValue } from './getValue';
import { Visibilities } from '../api/visibilities';
import { UpdateFormState } from '../api/useStateForm';
import { FormState, InputName, FormValue } from '../types';

export type ValidateProps = {
  formState: FormState;
  updateValidation: boolean;
  callback?: (valid: boolean | null, formValue: FormValue) => any;
  fromSetValue: boolean;
  updateFormState: UpdateFormState;
  getVisibilities: Visibilities;
  getFormState?: () => FormState;
  init?: boolean;
  skipUpdate?: boolean;
};
export type Validate = (params: ValidateProps) => FormState;

export const validate: Validate = ({
  formState,
  updateValidation,
  callback,
  fromSetValue,
  updateFormState,
  getVisibilities,
  getFormState,
  init,
  skipUpdate
}) => {
  const cloneRules = {};
  let formIsValid = true;
  const visibilities = getVisibilities({ getFormState: () => formState });

  const getNotVisibleInputs = () => {
    return Object.keys(formState.formValue).filter((inputName: InputName) => {
      const isVisible = visibilities.getVisibilityInput(inputName).isVisible;
      return !isVisible;
    });
  };

  const getValueForm = (formState: FormState): FormValue => {
    const formValue = cloneDeep(formState.formValue) as FormValue;
    const notVisibleInputs = getNotVisibleInputs();
    notVisibleInputs.forEach((inputName: InputName) => {
      delete formValue[inputName];
    });
    return formValue;
  };

  if (formState.rules) {
    Object.keys(formState.rules).forEach((inputName: InputName) => {
      const resultValidationInput = getValidationInput({
        formState,
        inputName,
        inputValue: getValue({ formState, inputName })
      });
      if (resultValidationInput) {
        //input is ignored if input not visible
        const isVisible = visibilities.getVisibilityInput(inputName).isVisible;
        if (!resultValidationInput.validationStatus && isVisible) {
          formIsValid = false;
        }
        cloneRules[inputName] = resultValidationInput.rulesInput;
      }
    });

    if (
      !isEqual(formState.rules, cloneRules) ||
      fromSetValue ||
      (!init && !formState.touched)
    ) {
      let _formState: FormState;
      const oldFormValue = getFormState ? getFormState() : formState;

      if (fromSetValue) {
        _formState = formState;
      } else {
        _formState = cloneDeep(formState) as FormState;
      }
      _formState.valid = formIsValid;
      _formState.rules = cloneRules;

      if (updateValidation) {
        //todo: check need of init
        if (init || skipUpdate) {
          if (!isEqual(_formState, oldFormValue)) {
            updateFormState(_formState, { skipUpdate, init });
          }
        } else {
          updateFormState(_formState);
        }
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
