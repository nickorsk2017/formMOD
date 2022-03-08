import {
  FormState,
  ElementMod,
  InputValue,
  ListenerObj,
  GroupInputId,
  InputGroupValue,
  InputGroupValues
} from '../../types';

export const toUseOnChangeEvent = (element: ElementMod) =>
  element !== null && (element.type === 'radio' || element.type === 'checkbox');

export type UpdateValueInputFromStateProps = {
  getFormState: () => FormState;
  element: ElementMod;
  inputName: string;
  groupInputId?: GroupInputId;
  toUseOnChangeEvent: boolean;
};

export type UpdateValueInputFromState = (
  params: UpdateValueInputFromStateProps
) => void;

export const updateValueInputFromState: UpdateValueInputFromState = ({
  getFormState,
  element,
  inputName,
  groupInputId,
  toUseOnChangeEvent
}) => {
  let inputValue: InputValue = '';
  if (!groupInputId) {
    inputValue = getFormState().formValue[inputName]?.toString() || '';
  } else {
    const inputGroup =
      (getFormState().formValue[inputName] as InputGroupValues) || [];
    if (Array.isArray(inputGroup)) {
      inputGroup.some((inputGroupValue: InputGroupValue) => {
        if (inputGroupValue.id === groupInputId) {
          inputValue = inputGroupValue.value;
          return true;
        }
        return false;
      });
    }
  }
  if (element) {
    if (toUseOnChangeEvent && (inputValue === '' || inputValue === null)) {
      if (element instanceof HTMLInputElement) {
        element.checked = !(inputValue === '' || inputValue === null);
      }
    } else {
      if (element.value !== inputValue) {
        element.value = inputValue;
      }
    }
  }
};

export const updateValueInputsFromState = (
  formState: FormState,
  eventListeners: Array<ListenerObj>
) => {
  for (const evenListener of eventListeners) {
    const valueInputFromForm =
      formState.formValue[evenListener.inputName] || '';
    if (
      evenListener.element !== null &&
      evenListener.element.value !== valueInputFromForm
    ) {
      evenListener.element.value = valueInputFromForm.toString();
    }
  }
};
