export type ControlValue = string | object | null | number;
export type ControlName = string;
export type MessageError = string;
export type ControlValidationResult = {
    
};
export type FormValue = {
    [key: string]: ControlValue;
}
export type FormRule = {
    name: string,
    valid?: boolean,
    message: string,
    params?: {func?: Function, max?: number, min?: number},
}
export type ResultValidationControl = {
    rulesControl: Array<FormRule>,
    validationStatus: boolean
};
export type FormRules = {
    [key: string]: Array<FormRule>,
}
export type FormState = {
    valid: boolean | null,
    formValue: FormValue,
    rules?: FormRules,
    disabledControls?: Array<string> 
}