import {setValue} from "../api";
import * as _ from 'lodash';
import {
    ControlName
} from "../types";
import {UpdateFormState} from "../api/useStateForm";

export function addEventListeners({element, controlName, updateFormState} : {element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, controlName: ControlName, updateFormState: UpdateFormState }) {
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