import * as _ from 'lodash';
import {
    FormState,
    FormRule,
    MessageError,
    ControlName
} from "../types";

export function getError({formState, controlName} : {formState: FormState, controlName: ControlName}): MessageError | null {
    const rules = formState.rules;
    if(formState.valid !== null && rules && rules[controlName]){
        const rulesControl = rules[controlName];
        const errorRule = rulesControl.find((rule: FormRule) => {
            return !rule.valid
        });
        return errorRule ? errorRule.message : null;
    }
    return null;
}