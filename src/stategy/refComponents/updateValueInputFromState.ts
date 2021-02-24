import {
    FormState,
    ElementMod,
    ControlValue,
    ListenerObj
} from "../../types";

export const toUseOnChangeEvent = (element: ElementMod) => (element !== null && (element.type === "radio" || element.type === "checkbox"));

export const updateValueInputFromState = (getFormState: () => FormState, element: ElementMod, controlName: string, toUseOnChangeEvent: boolean) => {
    let controlValue: ControlValue = getFormState().formValue[controlName]?.toString() || "";
    if(element){
        if(toUseOnChangeEvent && (controlValue === "" || controlValue === null)){
            if(element instanceof HTMLInputElement){
                element.checked = (controlValue === "" || controlValue === null) ? false : true;
            }
        } else {
            if(element.value !== controlValue){
                element.value = controlValue;
            }
        }
    }
};

export const updateValueInputsFromState = (formState: FormState, eventListeners: Array<ListenerObj>) => {
    for(let evenListener of eventListeners){
        const valueControlFromForm = formState.formValue[evenListener.controlName] || "";
        if(evenListener.element !== null && evenListener.element.value !== valueControlFromForm){
            evenListener.element.value = valueControlFromForm.toString();
        }
    }
}