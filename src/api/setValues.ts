import * as _ from 'lodash';
import {validate} from "./validate";
import {
    FormState,
    FormValue,
    ControlName
} from "../types";

export const setValues = ({formState, controlsValues, updateFormState} : {formState: FormState, controlsValues: FormValue, updateFormState: (updateFormState: FormState) => void}): FormState | false => {
    let _formState: FormState = _.cloneDeep(formState);
    Object.keys(controlsValues).forEach((controlName: ControlName) => {
        _formState.formValue[controlName] = controlsValues[controlName];
    });
    if(_formState.valid === null){
        updateFormState(_formState);
        return _formState;
    } else {
        return validate({formState: _formState, updateValidation: true, fromSetValue: true, updateFormState});
    }
    return false;
}