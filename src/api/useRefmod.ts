import {useCallback, useEffect } from 'react';
import {addEventListeners, removeEventListeners} from "../stategy";
import {
    ControlName,
    FormState,
} from "../types";

export function useRefmod({formState, controlName, eventListeners, updateFormState, updateEventListeners, deleteEventListener} : {formState: FormState, controlName: ControlName, eventListeners: Array<any>, updateFormState: (updateFormState: FormState) => void, updateEventListeners: (_eventListeners: any) => void, deleteEventListener: (controlName: ControlName) => void }) {
    useEffect(() => {
        console.log('mount element!!');
        return () => {
            console.log('unmount element!!');
            removeEventListeners({controlName, eventListeners});
            deleteEventListener(controlName);
        }
    }, []);

    const callback = useCallback((element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
        if(element){
            const listener = eventListeners.find((_eventListeners) => {
                return _eventListeners.controlName == controlName;
            });

            if(listener){
                listener.formState = formState;
            } else {
                let listenerObj = {
                    timer: null,
                    formState,
                    controlName,
                    element,
                    listenerHandler: () => {}
                };
                listenerObj.listenerHandler = addEventListeners({element, controlName, updateFormState}).bind(listenerObj);
                element.addEventListener("input", listenerObj.listenerHandler);

                //updateEventListeners();
                console.log(updateEventListeners, 'updateEventListeners');

                eventListeners.push(listenerObj);

                /*
                setTimeout(() => {

                    var event = new Event('input', {
                        bubbles: true,
                        cancelable: true,
                    });
                    element.value = "111";
                    element.dispatchEvent(event);

                }, 4000);

                setTimeout(() => {

                    removeEventListeners({controlName, eventListeners});
                    deleteEventListener(controlName);
                    
                }, 6000);



                setTimeout(() => {
                    

                    var event = new Event('input', {
                        bubbles: true,
                        cancelable: true,
                    });
                    element.value = "222";
                    element.dispatchEvent(event);

                }, 10000)
                
                */

            }
        }
    }, [formState]);
    return callback;
}