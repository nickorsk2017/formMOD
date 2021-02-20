import {setValue} from "../api";
import * as _ from 'lodash';
import {
    ControlName,
    ElementMod,
} from "../types";
import {UpdateFormState} from "../api/useStateForm";

export type AddEventListenersParams = {element: ElementMod, controlName: ControlName, updateFormState: UpdateFormState };
export type AddEventListeners = (params: AddEventListenersParams) => Function;

export const addEventListeners: AddEventListeners = ({element, controlName, updateFormState}) => {
    if(element instanceof HTMLElement){
        const listenerHandler = function(event: any){
            const controlValue = event.target.value;
            if(this.getFormState().formValue && !_.isEqual(this.getFormState().formValue[controlName], controlValue)){
                clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    setValue({formState: this.getFormState(), controlName, controlValue: event.target.value, updateFormState, useUncontroledForm: true});
                }, 300);
            }
        }
        //element.addEventListener("input", listenerHandler);
        return listenerHandler;
    }
    return () => {};
}