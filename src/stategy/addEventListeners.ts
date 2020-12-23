import {setValue} from "../api";
import * as _ from 'lodash';
import {
    ControlName,
    FormState,
} from "../types";

export function addEventListeners({element, controlName, updateFormState} : {element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, controlName: ControlName, updateFormState: (updateFormState: FormState) => void }) {
    if(element instanceof HTMLElement){
        const listenerHandler = function(event: any){
            const controlValue = event.target.value;
            if(this.formState.formValue && !_.isEqual(this.formState.formValue[controlName], controlValue)){
                clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    setValue({formState: this.formState, controlName, controlValue: event.target.value, updateFormState});
                }, 300);
            }
        }
        //element.addEventListener("input", listenerHandler);
        return listenerHandler;
    }
    return () => {};
}