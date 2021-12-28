import * as _ from 'lodash';
import { FormState, GetEventListeners, ControlGroupValue, ControlGroupValues } from '../types';

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
  if (!_.isEqual(initFormState, formState)) {
    const listeners = getEventListeners();
    listeners.forEach((listener) => {
      if (listener.element) {
        // if control group
        if(listener.groupControlId && Array.isArray(initFormState.formValue[listener.controlName])){
          const controlGroup: ControlGroupValues = (initFormState.formValue[listener.controlName] as ControlGroupValues) || [];
          controlGroup.some((control: ControlGroupValue) => {
            if(control.id === listener.groupControlId){
              if(typeof control.value !== "object" && listener.element){
                listener.element.value = control.value.toString() || "";
              }
              return true;
            }
            return false;
          });
        } else {
          listener.element.value = initFormState.formValue[listener.controlName]?.toString() || '';
        }
      }
    });
    updateFormState(initFormState);
    return initFormState;
  }
  return formState;
}
