import {FormSetting} from "../types";

export function getValue({formSettings, controlName, manuallyDisabledControls} : {formSettings: FormSetting, controlName?: string, manuallyDisabledControls: Array<string>}): any {
    let values = formSettings.values;
    if(!controlName){
        let _values = {};
        Object.keys(values).filter((controlName) => {
            return !manuallyDisabledControls.includes(controlName);
        }).forEach((controlName) => {
            _values[controlName] = values[controlName];
        });
        return _values;
    } else {
        // get value of control
        if(!manuallyDisabledControls.includes(controlName)){
            return values[controlName];
        }
    }
    return undefined;
}