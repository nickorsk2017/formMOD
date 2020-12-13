import * as _ from 'lodash';
import {FormSetting} from "../types";

export function setStateForm({formSettings, validation, callback, updateSettings} : {formSettings: FormSetting, validation: object | null,  callback?: Function, updateSettings: (settings) => any}) {
    if(!_.isEqual(validation, formSettings.validation)){
        let _formSettings = _.cloneDeep(formSettings);
        _formSettings.validation = validation;
        updateSettings(_formSettings);
        if(typeof callback == "function") {
            callback(validation);
        }
    }
}