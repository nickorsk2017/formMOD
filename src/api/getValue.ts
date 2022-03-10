import { cloneDeep as _cloneDeep } from '../utils';
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
  cloneDeep?: boolean;
};
export type GetValue = <T>(params: GetValueProps) => T | InputValue | FormValue;

export const getValue: GetValue = ({
  formState,
  inputName,
  groupInputId,
  cloneDeep
}) => {
  if (!inputName) {
    const formValue = cloneDeep
      ? _cloneDeep(formState.formValue)
      : formState.formValue;
    return formValue;
  } else {
    let inputValue = formState.formValue[inputName];
    // if is group input
    if (groupInputId && Array.isArray(inputValue)) {
      inputValue.some((v) => {
        const found = v.id === groupInputId;
        if (found) {
          inputValue = v.value;
        }
        return found;
      });
    }
    if (cloneDeep) {
      return _cloneDeep(inputValue);
    }
    return inputValue;
  }
  // return undefined;
};
