import { useState } from 'react';
import { getValue, setValue, getError, validate} from "./api"; 
import {FormSetting} from "./types";

export function useFormMod(initSettings: FormSetting) {
    const [formSettings, updateSettings] = useState(initSettings);
    // if you choose disable control by manually;
    const manuallyDisabledControls: Array<string> = [];
    return {
        formSettings,
        getValue: (controlName?: string) => getValue({formSettings, controlName, manuallyDisabledControls}),
		setValue: (controlName: string, controlValue: string | object | null | number) => setValue({formSettings, controlName, controlValue, updateSettings}),
		getError: (controlName: string) => getError({formSettings, controlName}),
		validate: (updateValidation: boolean, callback: Function) => validate({formSettings, manuallyDisabledControls, updateValidation, callback, updateSettings})
    };
  }