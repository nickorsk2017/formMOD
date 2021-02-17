import { useRef } from 'react';
import {useForceUpdate} from "../utils";
import {FormState} from "../types";

export type UpdateFormState = (newFormState: FormState, useUncontroledForm?: boolean) => FormState;

export const useStateForm = (initFormState: FormState) => {
    const result = useRef((() => {
        let formState: FormState = initFormState;
        const {forceUpdate} = useForceUpdate();

        const updateFormState : UpdateFormState = (newFormState, useUncontroledForm) => {
            formState = newFormState;
            if(!useUncontroledForm || formState.valid !== null){
                forceUpdate();
            }
            return formState;
        };
        return {getFormState: () => formState, updateFormState}
    })()).current;

    return result;
}