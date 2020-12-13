import * as _ from 'lodash';
import {ControlValue, FormSetting} from "../types";

export function setValue({formSettings, controlName, controlValue, updateSettings} : {formSettings: FormSetting, controlName: string, controlValue: ControlValue, updateSettings: (settings) => any}){
    if(!_.isEqual(controlValue, formSettings.values[controlName])){
        let _formSettings = _.cloneDeep(formSettings);
        _formSettings.values[controlName] = controlValue;
        updateSettings(_formSettings);
    }
}