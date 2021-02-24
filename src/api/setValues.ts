import * as _ from 'lodash';
import {validate} from "./validate";
import {Visibilities} from "../api/visibilities";
import {
    FormState,
    FormValue,
    ControlName
} from "../types";

export type SetValuesParams = {
    formState: FormState,
    controlsValues: FormValue,
    updateFormState: (updateFormState: FormState) => void,
    getVisibilities: Visibilities
};
export type SetValues = (params: SetValuesParams) => FormState | false;

export const setValues: SetValues = ({formState, controlsValues, updateFormState, getVisibilities}) => {
    let _formState: FormState = _.cloneDeep(formState);
    Object.keys(controlsValues).forEach((controlName: ControlName) => {
        _formState.formValue[controlName] = controlsValues[controlName];
    });
    if(_formState.valid === null){
        updateFormState(_formState);
        return _formState;
    } else {
        return validate({formState: _formState, updateValidation: true, fromSetValue: true, updateFormState, getVisibilities});
    }
    //return false;
}