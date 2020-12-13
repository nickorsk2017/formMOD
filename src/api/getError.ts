import { getStateControl } from "./";
import {FormSetting} from "../types";

export function getError({formSettings, controlName} : {formSettings: FormSetting, controlName?: string}){
    if(formSettings.validation){
        let rulesResult = getStateControl({formSettings, controlName, controlValue: null}); 
        const error = rulesResult.find((resultRule) => {
            return !resultRule.valid && typeof resultRule.ruleResult.message === 'string';
        });
        if(error) {
            return error.ruleResult.message;
        }
    }
    return null;
}
