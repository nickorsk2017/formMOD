import * as _ from 'lodash';
import {getValidationControl} from "./getValidationControl";
import {getValue} from "./getValue";
import {Visibilities} from "../api/visibilities";
import {FormState, ControlName} from "../types";

export type ValidateParams = {
    formState: FormState,
    updateValidation: boolean,
    callback?: Function,
    fromSetValue: boolean,
    updateFormState: (updateFormState: FormState) => any,
    getVisibilities: Visibilities
};
export type Validate = (params: ValidateParams) => FormState;

export const validate: Validate = ({formState, updateValidation, callback, fromSetValue, updateFormState, getVisibilities}) => {
    let cloneRules = {};
    let formIsValid = true;
    if(formState.rules){
        const visibilities = getVisibilities({getFormState: () => formState});

        Object.keys(formState.rules).forEach((controlName: ControlName) => {
            const resultValidationControl = getValidationControl({formState, controlName, controlValue: getValue({formState, controlName})});
            if(resultValidationControl){
                // the input is ignored if input not visible
                const isVisible = visibilities.getVisibilityControl(controlName).isVisible;
                if(!resultValidationControl.validationStatus && isVisible){
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