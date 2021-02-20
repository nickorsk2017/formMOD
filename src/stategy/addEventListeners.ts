import {setValue} from "../api";
import * as _ from 'lodash';
import {
    ControlName,
    ElementMod,
} from "../types";
import {toUseOnChangeEvent} from "../api/useRefmod";
import {UpdateFormState} from "../api/useStateForm";

export type AddEventListenersParams = {element: ElementMod, controlName: ControlName, updateFormState: UpdateFormState };
export type AddEventListeners = (params: AddEventListenersParams) => Function;

export const addEventListeners: AddEventListeners = ({element, controlName, updateFormState}) => {
    if(element instanceof HTMLElement){
        const listenerHandler = function(event: any){
            let controlValue = event.target.value;
            let _skipUpdate = true;
            let timer = 300;
            const valueFromFormState = this.getFormState().formValue[controlName];
            // toggle value for checkbox, option
            if(toUseOnChangeEvent(event.target)){
                controlValue = !valueFromFormState;
                _skipUpdate = false;
                timer = 0;
            }
            if(this.getFormState().formValue && !_.isEqual(valueFromFormState, controlValue)){
                clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    setValue({formState: this.getFormState(), controlName, controlValue, updateFormState, skipUpdate: _skipUpdate});
                }, timer);
            }
        }
        //element.addEventListener("input", listenerHandler);
        return listenerHandler;
    }
    return () => {};
}