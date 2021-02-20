import * as _ from 'lodash';
import {validate} from "./validate";
import {
    FormState,
    ControlName,
    ControlValue
} from "../types";
import {UpdateFormState} from "./useStateForm";

export type SetValueParams = {
    formState: FormState,
    controlName: ControlName,
    controlValue: ControlValue,
    updateFormState: UpdateFormState,
    skipUpdate: boolean | undefined,
};

export type SetValue = (params: SetValueParams) => FormState | false;

export const setValue: SetValue = ({formState, controlName, controlValue, updateFormState, skipUpdate} : SetValueParams) => {
    if(!_.isEqual(controlValue, formState.formValue[controlName])){
        let _formState: FormState = _.cloneDeep(formState);
        _formState.formValue[controlName] = controlValue;
        if(_formState.valid === null){
            updateFormState(_formState, skipUpdate);
            return _formState;
        } else {
            return validate({formState: _formState, updateValidation: true, fromSetValue: true, updateFormState});
        }
    }
    return false;
}