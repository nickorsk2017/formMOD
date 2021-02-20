import * as _ from 'lodash';
import {
    FormState,
    GetEventListeners,
} from "../types";

export function resetForm({initFormState, formState, updateFormState, getEventListeners} : {initFormState: FormState, formState: FormState, updateFormState: (updateFormState: FormState) => void, getEventListeners: GetEventListeners}): FormState {
    if(!_.isEqual(initFormState, formState)){
        const listeners = getEventListeners();
        listeners.forEach((listener) => {
            listener.element.value = initFormState.formValue[listener.controlName]?.toString() || "";
        });
        updateFormState(initFormState);
        return initFormState;
    }
    return formState;
}