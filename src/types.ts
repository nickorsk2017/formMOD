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

export type FormRuleParams = {
  // for custom rule
  rule?: (params?: any) => any;
  max?: number;
  min?: number;
  isNumeric?: boolean;
};

export type GroupRules = {
  [key: string]: {
    id: string | number;
    valid?: boolean;
  };
};

export type FormRule = {
  name: string;
  valid?: boolean;
  groupRules?: GroupRules;
  message: string;
  params?: FormRuleParams;
};

// short syntax validation rule
// ["ruleName", "message", {params}, valid, groupRules]
// eslint-disable-next-line prettier/prettier
export type FormRuleShort = (string | FormRuleParams | boolean | GroupRules)[]

export type ResultValidationInput = {
  rulesInput: Array<FormRule>;
  validationStatus: boolean;
};
export type FormRules = {
  [key: string]: Array<FormRule>;
};
export type FormRulesInit = {
  [key: string]: (FormRule | FormRuleShort)[];
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
  touched?: boolean;
  onFly?: boolean;
  onFlyTouched: Array<string>;
};

export type InitFormState = {
  valid: boolean | null;
  viewMode?: boolean;
  formValue: FormValue;
  visibilities?: FormVisibilities;
  rules?: FormRulesInit;
  disabledInputs?: Array<string>;
  onFly?: boolean;
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
