import {useCallback, useEffect } from 'react';
import {addEventListeners, removeEventListeners} from "../stategy";
import {
    ControlName,
    FormState
} from "../types";
import {GetError} from "./getError";
import {UpdateFormState} from "../api/useStateForm";

export type UserefmodParams = {
    getFormState: () => FormState,
    controlName: ControlName,
    eventListeners: Array<any>,
    updateFormState: UpdateFormState,
    updateEventListeners: (_eventListeners: any) => void,
    deleteEventListener: (controlName: ControlName) => void,
    getError: GetError
};
export type UseRefmod = (params: UserefmodParams) => void;

export function useRefmod({getFormState, controlName, eventListeners, updateFormState, updateEventListeners, deleteEventListener, getError} : UserefmodParams) {
    useEffect(() => {
        console.log('mount element!!');
        return () => {
            console.log('unmount element!!');
            removeEventListeners({controlName, eventListeners});
            deleteEventListener(controlName);
        }
    }, []);

    const ref = useCallback((element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
        if(element){
            const listener = eventListeners.find((_eventListeners) => {
                return _eventListeners.controlName == controlName;
            });

            if(listener){
                //listener.getFormState = getFormState;
            } else {
                let listenerObj = {
                    timer: null,
                    getFormState,
                    controlName,
                    element,
                    listenerHandler: () => {}
                };
                listenerObj.listenerHandler = addEventListeners({element, controlName, updateFormState}).bind(listenerObj);
                element.addEventListener("input", listenerObj.listenerHandler);

                //updateEventListeners();
                console.log(updateEventListeners, 'updateEventListeners');

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