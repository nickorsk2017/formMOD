import { FormState, FormValue, ControlName, ControlValue, GroupControlId } from '../types';

export type GetValueParams = {
  formState: FormState;
  controlName?: ControlName;
  groupControlId?: GroupControlId;
};
export type GetValue = (params: GetValueParams) => ControlValue | FormValue;

export const getValue: GetValue = ({ formState, controlName, groupControlId }) => {
  if (!controlName) {
    return formState.formValue;
  } else {
    let formValue = formState.formValue[controlName];
    // if is group controls
    if(groupControlId && Array.isArray(formValue)){
      formValue.some((v) => {
        const found = v.id === groupControlId;
        if(found){
          formValue = v.value;
        }
        return found;
      });
    }
    return formValue;
  }
  // return undefined;
};
