import {useCallback, useEffect } from 'react';
import {addEventListeners, removeEventListeners} from "../stategy";
import {
    ControlName,
    FormState,
    ElementMod,
    ListenerObj,
    GetEventListeners,
} from "../types";
import {GetError} from "./getError";
import {UpdateFormState} from "../api/useStateForm";

export type UserefmodParams = {
    getFormState: () => FormState,
    controlName: ControlName,
    getEventListeners: GetEventListeners,
    updateFormState: UpdateFormState,
    updateEventListeners: (_eventListeners: Array<ListenerObj>) => void,
    deleteEventListener: (controlName: ControlName) => void,
    getError: GetError
};
export type UseRefmod = (params: UserefmodParams) => void;

export function useRefmod({getFormState, controlName, getEventListeners, updateFormState, updateEventListeners, deleteEventListener, getError} : UserefmodParams) {
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
                // set init value
                element.value = getFormState().formValue[controlName]?.toString() || "";
                element.addEventListener("input", listenerObj.listenerHandler);
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
        })
    };
}