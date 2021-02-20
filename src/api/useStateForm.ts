import { useRef } from 'react';
import {useForceUpdate} from "../utils";
import {FormState} from "../types";

export type UpdateFormState = (newFormState: FormState, skipUpdate?: boolean) => FormState;

export const useStateForm = (initFormState: FormState) => {
    const result = useRef((() => {
        let formState: FormState = initFormState;
        const {forceUpdate} = useForceUpdate();

        const updateFormState : UpdateFormState = (newFormState, skipUpdate) => {
            formState = newFormState;
            if(!skipUpdate || formState.valid !== null){
                forceUpdate();
            }
            console.log(formState, 'formState!');
            return formState;
        };
        return {getFormState: () => formState, updateFormState}
    })()).current;

    return result;
}