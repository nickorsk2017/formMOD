export type ControlValue = number | string | object | null | boolean;
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
export type FormVisibilities = {
    [key: string]: any;
}
export type FormState = {
    valid: boolean | null,
    formValue: FormValue,
    visibilities?: FormVisibilities,
    rules?: FormRules,
    disabledControls?: Array<string> 
}
export type ElementMod = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export type GetEventListeners = () => Array<ListenerObj>;

export type ListenerObj = {
    timer: ReturnType<typeof setTimeout> | null,
    getFormState: () => FormState,
    controlName: string,
    element: ElementMod,
    listenerHandler: () => void | EventListenerObject
};