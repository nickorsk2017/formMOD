import { FormState, FormValue, ControlName, ControlValue } from '../types';

export type GetValueParams = {
  formState: FormState;
  controlName?: ControlName;
};
export type GetValue = (params: GetValueParams) => ControlValue | FormValue;

export const getValue: GetValue = ({ formState, controlName }) => {
  if (!controlName) {
    if (
      formState.disabledControls &&
      Array.isArray(formState.disabledControls)
    ) {
      const result = {};
      Object.keys(formState.formValue).forEach((_controlName: ControlName) => {
        if (
          !formState.disabledControls ||
          !formState.disabledControls.includes(_controlName)
        ) {
          result[_controlName] = formState.formValue[_controlName];
        }
      });
      return result;
    } else {
      return formState.formValue;
    }
  } else {
    // get value of control
    // if(formState.disabledControls && Array.isArray(formState.disabledControls) && !formState.disabledControls.includes(controlName)){
    return formState.formValue[controlName];
    // }
  }
  // return undefined;
};
