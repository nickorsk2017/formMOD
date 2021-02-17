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
import {FormState, FormValue, ControlName} from "./types";

export const useFormMod = (initFormState: FormState, useControledForm: boolean | undefined = false) => {
    //const [formState, updateFormState] = useState(initFormState);
    const {getFormState, updateFormState} = useStateForm(initFormState);
    console.log(useControledForm, 'useControledForm!');

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
      resetForm: () => resetForm({initFormState, formState: getFormState(), updateFormState}),
      useRefmod: (controlName: ControlName) => useRefmod({getFormState, controlName, eventListeners, updateFormState, updateEventListeners, deleteEventListener, getError}),
    };
  }