import * as _ from 'lodash';
import {getValidationControl} from "./getValidationControl";
import {getValue} from "./getValue";
import {FormState, ControlName} from "../types";

export const validate = ({formState, updateValidation, callback, fromSetValue, updateFormState} : {formState: FormState, updateValidation: boolean, callback?: Function, fromSetValue: boolean, updateFormState: (updateFormState: FormState) => any}): FormState  => {
    let cloneRules = {};
    let formIsValid = true;
    if(formState.rules){
        Object.keys(formState.rules).forEach((controlName: ControlName) => {
            const resultValidationControl = getValidationControl({formState, controlName, controlValue: getValue({formState, controlName})});
            if(resultValidationControl){
                if(!resultValidationControl.validationStatus){
                    formIsValid = false;
                }
                cloneRules[controlName] = resultValidationControl.rulesControl;
            }
        });
        if(!_.isEqual(formState.rules, cloneRules) || fromSetValue){
            let _formState: FormState;
            if(fromSetValue){
                _formState = formState;
            } else {
                _formState = _.cloneDeep(formState)
            }
            _formState.valid = formIsValid;
            _formState.rules = cloneRules;
            if(updateValidation){
                updateFormState(_formState);
            }
            if(typeof callback == "function"){
                callback(_formState.valid);
            }
            return _formState;
        }
    }
    return formState;
}