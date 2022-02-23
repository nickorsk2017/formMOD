export type InputGroupValue = {
  id: string | number;
  value: InputValue;
  params?: any;
};
export type InputGroupValues = Array<InputGroupValue>;
export type InputValue = any | InputGroupValues;
export type InputName = string;
export type MessageError = string;
export type FormValue = {
  [key: string]: InputValue;
};
export type FormRule = {
  name: string;
  valid?: boolean;
  groupRules?: {
    [key: string]: {
      id: string | number;
      valid?: boolean;
    };
  };
  message: string;
  params?: { func?: (params?: any) => any; max?: number; min?: number };
};
export type ResultValidationInput = {
  rulesInput: Array<FormRule>;
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
  viewMode?: boolean;
  formValue: FormValue;
  visibilities?: FormVisibilities;
  rules?: FormRules;
  disabledInputs?: Array<string>;
};
export type ElementMod =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement
  | null;

export type GetEventListeners = () => Array<ListenerObj>;
export type GroupInputId = string | number | null;

export type ListenerObj = {
  //timer: ReturnType<typeof setTimeout> | null;
  timer: React.MutableRefObject<NodeJS.Timeout | null>;
  getFormState: () => FormState;
  inputName: string;
  element: ElementMod;
  groupInputId?: GroupInputId;
  listenerHandler: () => void | EventListenerObject;
  clearEffects: () => void;
};

export type useRefModResult = {
  ref: (instance: HTMLInputElement) => void;
  setViewMode: (viewMode: boolean) => boolean;
  isViewMode: () => boolean;
  getError: (params?: { inputId?: GroupInputId }) => string | null;
  getValue: (params?: { inputId?: GroupInputId }) => InputValue;
  setValue: (
    inputValue: InputValue,
    skipUpdate?: boolean,
    inputId?: GroupInputId,
    skipValidation?: boolean
  ) => false | FormState;
  isVisible: (params?: { inputId?: GroupInputId }) => boolean;
  isDisable: (params?: { inputId?: GroupInputId }) => boolean;
};
export type useRefModAPI = (inputName: InputName) => useRefModResult;
