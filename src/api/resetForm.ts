import { isEqual } from '../utils';
import {
  FormState,
  GetEventListeners,
  InputGroupValue,
  InputGroupValues
} from '../types';

export function resetForm({
  initFormState,
  formState,
  updateFormState,
  getEventListeners
}: {
  initFormState: FormState;
  formState: FormState;
  updateFormState: (updateFormState: FormState) => void;
  getEventListeners: GetEventListeners;
}): FormState {
  if (!isEqual(initFormState, formState)) {
    const listeners = getEventListeners();
    listeners.forEach((listener) => {
      if (listener.element) {
        // if group input
        if (
          listener.groupInputId &&
          Array.isArray(initFormState.formValue[listener.inputName])
        ) {
          const inputGroup: InputGroupValues =
            (initFormState.formValue[listener.inputName] as InputGroupValues) ||
            [];
          inputGroup.some((input: InputGroupValue) => {
            if (input.id === listener.groupInputId) {
              if (typeof input.value !== 'object' && listener.element) {
                listener.element.value = input.value.toString() || '';
              }
              return true;
            }
            return false;
          });
        } else {
          listener.element.value =
            initFormState.formValue[listener.inputName]?.toString() || '';
        }
      }
    });
    updateFormState(initFormState);
    return initFormState;
  }
  return formState;
}
