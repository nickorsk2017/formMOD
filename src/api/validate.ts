import {getValue, getStateControl, setStateForm} from "./";
import {FormSetting} from "../types";

export function validate({formSettings, manuallyDisabledControls, updateValidation, callback, updateSettings} : {formSettings: FormSetting, manuallyDisabledControls: Array<string>, updateValidation: boolean, callback: Function, updateSettings: (settings) => any}) {
    const formValue = getValue({formSettings, controlName: null, manuallyDisabledControls});
    let validation = {
        valid: true,
        firstError: null,
        controlsValidations: []
    };
    for(const key in formValue) {
        if(formValue.hasOwnProperty(key)){
            const validationsInput = getStateControl({formSettings, controlName: key, controlValue: formValue[key]});
            validation.controlsValidations.push(validationsInput);
            if(validation.valid) {
                validationsInput.some(validationInput => {
                    if(!validationInput.ruleResult.valid) {
                        validation.firstError = validationInput;
                        validation.valid = false;
                        return true;
                    }
                    return false;
                });
            }
        }
    }
    if(updateValidation) {
        setStateForm({formSettings, validation, callback, updateSettings});
    }
    return validation;
}