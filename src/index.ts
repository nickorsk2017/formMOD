import { useEffect, useMemo, useState } from 'react';
import {
  getValue,
  setValue,
  setValues,
  getError,
  validate,
  resetForm,
  useRefmod,
} from "./api";
import {FormState, FormValue, ControlName} from "./types";

export function useFormMod(initFormState: FormState, useControledForm: boolean | undefined = false) {
    const [formState, updateFormState] = useState(initFormState);
    console.log(formState, useControledForm, 'useFormMod formState!!');

    const {eventListeners, updateEventListeners, deleteEventListener, deleteAllEventListeners} = useMemo(() => {
      let eventListeners: any = [];
      const updateEventListeners = <T>(_eventListeners: T) => {
        eventListeners = _eventListeners;
      };
      const deleteEventListener = (controlName: ControlName) => {
        eventListeners = eventListeners.filter((eventListener: any) => {
          return eventListener.controlName !== controlName;
        });
      };
      const deleteAllEventListeners = () => {
        eventListeners = [];
      };
      return {eventListeners, updateEventListeners, deleteEventListener, deleteAllEventListeners}
    }, []);
  
    const effectResult = useEffect(() => {
      return () => {
          console.log('unmount form');
          deleteAllEventListeners();
      }
    }, []);
    console.log(effectResult, 'effectResult!!');

    return {
      formState,
      getValue: (controlName?: ControlName) => getValue({formState, controlName}),
      setValue: (controlName: ControlName, controlValue: string | object | null | number) => setValue({formState, controlName, controlValue, updateFormState}),
      setValues: (controlsValues: FormValue) => setValues({formState, controlsValues, updateFormState}),
      validate: (updateValidation: boolean, callback: Function) => validate({formState, updateValidation, callback, fromSetValue: false, updateFormState}),
      getError: (controlName: ControlName) => getError({formState, controlName}),
      resetForm: () => resetForm({initFormState, formState, updateFormState}),
      useRefmod: (controlName: ControlName) => useRefmod({formState, controlName, eventListeners, updateFormState, updateEventListeners, deleteEventListener}),
    };
  }