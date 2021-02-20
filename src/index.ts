import { useEffect, useMemo } from 'react';
import {
  getValue,
  setValue,
  setValues,
  getError,
  validate,
  resetForm,
  useRefmod,
  useStateForm,
} from "./api";
import {
  FormState,
  FormValue,
  ControlName,
  ListenerObj,
  GetEventListeners,
} from "./types";

export const useFormMod = (initFormState: FormState, useControledForm: boolean | undefined = false) => {
    const {getFormState, updateFormState} = useStateForm(initFormState);
    console.log(useControledForm, 'useControledForm!');

    const {updateEventListeners, deleteEventListener, deleteAllEventListeners, getEventListeners} = useMemo(() => {
      let eventListeners: Array<ListenerObj> = [];

      const updateEventListeners = (_eventListeners: Array<ListenerObj>) => {
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
      const getEventListeners: GetEventListeners = () => {
        return eventListeners;
      };
      return {getEventListeners, updateEventListeners, deleteEventListener, deleteAllEventListeners}
    }, []);
  
    useEffect(() => {
      return () => {
          console.log('unmount form');
          deleteAllEventListeners();
      }
    }, []);

    
    return {
      formState: getFormState(),
      getValue: (controlName?: ControlName) => getValue({formState: getFormState(), controlName}),
      setValue: (controlName: ControlName, controlValue: string | object | null | number, useUncontroledForm?: boolean) => setValue({formState: getFormState(), controlName, controlValue, updateFormState, useUncontroledForm}),
      setValues: (controlsValues: FormValue) => setValues({formState: getFormState(), controlsValues, updateFormState}),
      validate: (updateValidation: boolean, callback: Function) => validate({formState: getFormState(), updateValidation, callback, fromSetValue: false, updateFormState}),
      getError: (controlName: ControlName) => getError({formState: getFormState(), controlName}),
      resetForm: () => resetForm({initFormState, formState: getFormState(), updateFormState, getEventListeners}),
      useRefmod: (controlName: ControlName) => useRefmod({getFormState, controlName, getEventListeners, updateFormState, updateEventListeners, deleteEventListener, getError}),
    };
  }