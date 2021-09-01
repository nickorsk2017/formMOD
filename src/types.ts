export type ControlGroupValue = {
  id: string | number,
  value: ControlValue,
  params?: any,
};
export type ControlGroupValues = Array<ControlGroupValue>
export type ControlValue = number | string | object | boolean | ControlGroupValues | null;
export type ControlName = string;
export type MessageError = string;
export type ControlValidationResult = {};
export type FormValue = {
  [key: string]: ControlValue;
};
export type FormRule = {
  name: string;
  valid?: boolean;
  groupRules?: {
    [key: string]: {
      id: string | number,
      valid?: boolean
    }
  },
  message: string;
  params?: { func?: Function; max?: number; min?: number };
};
export type ResultValidationControl = {
  rulesControl: Array<FormRule>;
  validationStatus: boolean;
};
export type FormRules = {
  [key: string]: Array<FormRule>;
};
export type FormVisibilities = {
  [key: string]: any;
};
export type FormState = {
  valid: boolean | null;
  formValue: FormValue;
  visibilities?: FormVisibilities;
  rules?: FormRules;
  disabledControls?: Array<string>;
};
export type ElementMod =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement
  | null;

export type GetEventListeners = () => Array<ListenerObj>;
export type GroupControlId = string | number | null;

export type ListenerObj = {
  timer: ReturnType<typeof setTimeout> | null;
  getFormState: () => FormState;
  controlName: string;
  element: ElementMod;
  groupControlId?: GroupControlId; 
  listenerHandler: () => void | EventListenerObject;
};

export type useRefModResult = {
  ref: (instance: HTMLInputElement) => void;
  getError: (params?: {controlId?: GroupControlId}) => string | null;
  getValue: (params?: {controlId?: GroupControlId}) => ControlValue;
  isVisible: (params?: {controlId?: GroupControlId}) => boolean;
  isDisable: (params?: {controlId?: GroupControlId}) => boolean;
};
export type useRefModAPI = (controlName: ControlName) => useRefModResult;
