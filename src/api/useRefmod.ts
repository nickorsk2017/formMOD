import {useCallback, useEffect } from 'react';
import {addEventListeners, removeEventListeners} from "../stategy";
import {
    ControlName,
    FormState,
    ElementMod,
    ListenerObj,
    GetEventListeners,
    ControlValue,
} from "../types";
import {GetValue} from "./getValue";
import {GetError} from "./getError";
import {UpdateFormState} from "../api/useStateForm";

export type UserefmodParams = {
    getFormState: () => FormState,
    controlName: ControlName,
    getEventListeners: GetEventListeners,
    updateFormState: UpdateFormState,
    updateEventListeners: (_eventListeners: Array<ListenerObj>) => void,
    deleteEventListener: (controlName: ControlName) => void,
    getError: GetError,
    getValue: GetValue,
};
export type UseRefmod = (params: UserefmodParams) => void;

export const toUseOnChangeEvent = (element: ElementMod) => element.type === "radio" || element.type === "checkbox";

export const updateRefValuesFromFormState = (formState: FormState, element: ElementMod, controlName: string, toUseOnChangeEvent: boolean) => {
    let controlValue: ControlValue = formState.formValue[controlName]?.toString() || "";

    if(toUseOnChangeEvent && (controlValue === "" || controlValue === null)){
        if(element instanceof HTMLInputElement){
            element.checked = (controlValue === "" || controlValue === null) ? false : true;
        }
    } else {
        element.value = controlValue;
    }
};

export const useRefmod = ({getFormState, controlName, getEventListeners, updateFormState, updateEventListeners, deleteEventListener, getError, getValue} : UserefmodParams) => {
    useEffect(() => {
        const eventListeners = getEventListeners();
        console.log('mount element!!');
        return () => {
            console.log('unmount element!!');
            removeEventListeners({controlName, eventListeners});
            deleteEventListener(controlName);
        }
    }, []);

    const ref = useCallback((element: ElementMod) => {
        const eventListeners = getEventListeners();
        if(element){
            const listener = eventListeners.find((eventListener: ListenerObj) => {
                return eventListener.controlName == controlName;
            });

            if(listener){
                // reinit input

                //listener.getFormState = getFormState;
            } else {
                // init input
                let listenerObj: ListenerObj = {
                    timer: null,
                    getFormState,
                    controlName,
                    element,
                    listenerHandler: () => {}
                };
                listenerObj.listenerHandler = addEventListeners({element, controlName, updateFormState}).bind(listenerObj);
                // set init value from formState
                updateRefValuesFromFormState(getFormState(), element, controlName, toUseOnChangeEvent(element));

                if(toUseOnChangeEvent(element)){
                    element.addEventListener("change", listenerObj.listenerHandler);
                } else {
                    element.addEventListener("input", listenerObj.listenerHandler);
                }
                //updateEventListeners();
                console.log(updateEventListeners, 'updateEventListeners!');
                eventListeners.push(listenerObj);
            }
        }
    }, [getFormState()]);
    return {
        ref,
        getError: () => getError({
            formState: getFormState(),
            controlName,
        }),
        getValue: () => {
            return getValue({formState: getFormState(), controlName});
        }
    };
}