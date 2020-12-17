import * as _ from 'lodash';
import {
    FormState,
} from "../types";

export function resetForm({initFormState, formState, updateFormState} : {initFormState: FormState, formState: FormState, updateFormState: (updateFormState: FormState) => void}): FormState {
    if(!_.isEqual(initFormState, formState)){
        updateFormState(initFormState);
        return initFormState;
    }
    return formState;
}