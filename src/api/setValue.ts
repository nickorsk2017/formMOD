import * as _ from 'lodash';
import {validate} from "./validate";
import {
    FormState,
    ControlName,
    ControlValue
} from "../types";

export const setValue = ({formState, controlName, controlValue, updateFormState} : {formState: FormState, controlName: ControlName, controlValue: ControlValue, updateFormState: (updateFormState: FormState) => void}): FormState | false => {
    if(!_.isEqual(controlValue, formState.formValue[controlName])){
        let _formState: FormState = _.cloneDeep(formState);
        _formState.formValue[controlName] = controlValue;
        if(_formState.valid === null){
            updateFormState(_formState);
            return _formState;
        } else {
            return validate({formState: _formState, updateValidation: true, fromSetValue: true, updateFormState});
        }
    }
    return false;
}