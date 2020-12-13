export type formValue = {
    [key: string]: ControlValue;
}
export type formRules = {
    [key: string]: Array<object>,
} 
export type FormSetting = {
    validation: null | boolean,
    values: formValue,
    rules?: formRules,
}
export type ControlValue = string | object | null | number;
export type ValidationResult = {
    controlName: string,
    ruleResult: any,
    valid: boolean,
}