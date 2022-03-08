import {
  FormState,
  FormValue,
  InputName,
  InputValue,
  GroupInputId
} from '../types';

export type GetValueProps = {
  formState: FormState;
  inputName?: InputName;
  groupInputId?: GroupInputId;
};
export type GetValue = <T>(
  params: GetValueProps
) => T | InputValue | FormValue;

export const getValue: GetValue = ({ formState, inputName, groupInputId }) => {
  if (!inputName) {
    return formState.formValue;
  } else {
    let formValue = formState.formValue[inputName];
    // if is group input
    if (groupInputId && Array.isArray(formValue)) {
      formValue.some((v) => {
        const found = v.id === groupInputId;
        if (found) {
          formValue = v.value;
        }
        return found;
      });
    }
    return formValue;
  }
  // return undefined;
};
