//import {setValue} from "../api";
import * as _ from 'lodash';
import {
    ControlName
} from "../types";

export function removeEventListeners({controlName, eventListeners} : {controlName: ControlName, eventListeners: Array<any>}) {
    return eventListeners.filter((eventListener) => {
        if(eventListener.controlName === controlName){
            if(eventListener.element instanceof HTMLElement && eventListener.element.removeEventListener){
                eventListener.element.removeEventListener("input", eventListener.listenerHandler);
                return false;
            }
        }
        return true;
    });
}