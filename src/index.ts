import { useState } from 'react';
import { getValue, setValue, setValues, getError, validate, resetForm} from "./api"; 
import {FormState, FormValue, ControlName} from "./types";

export function useFormMod(initFormState: FormState) {
    const [formState, _updateFormState] = useState(initFormState);
    const updateFormState = (newFormState: FormState) => {
      _updateFormState(newFormState);
    }

    return {
      formState,
      getValue: (controlName?: ControlName) => getValue({formState, controlName}),
      setValue: (controlName: ControlName, controlValue: string | object | null | number) => setValue({formState, controlName, controlValue, updateFormState}),
      setValues: (controlsValues: FormValue) => { return setValues({formState, controlsValues, updateFormState})},
      validate: (updateValidation: boolean, callback: Function) => validate({formState, updateValidation, callback, fromSetValue: false, updateFormState}),
      getError: (controlName: ControlName) => getError({formState, controlName}),
      resetForm: () => resetForm({initFormState, formState, updateFormState})
    };
  }