import { FormState, ElementMod, ControlValue, ListenerObj, GroupControlId, ControlGroupValue, ControlGroupValues } from '../../types';

export const toUseOnChangeEvent = (element: ElementMod) =>
  element !== null && (element.type === 'radio' || element.type === 'checkbox');

export type UpdateValueInputFromStateParams = {
  getFormState: () => FormState,
  element: ElementMod,
  controlName: string,
  groupControlId?: GroupControlId,
  toUseOnChangeEvent: boolean,
};

export type UpdateValueInputFromState = (params: UpdateValueInputFromStateParams) => void;

export const updateValueInputFromState: UpdateValueInputFromState = ({
    getFormState,
    element,
    controlName,
    groupControlId,
    toUseOnChangeEvent,
  }
) => {
  let controlValue: ControlValue = "";
  if(!groupControlId){
    controlValue = getFormState().formValue[controlName]?.toString() || "";
  } else {
    const controlGroup = getFormState().formValue[controlName] as ControlGroupValues || [];
    if(Array.isArray(controlGroup)){
      controlGroup.some((controlGroupValue: ControlGroupValue) => {
        if(controlGroupValue.id === groupControlId){
          controlValue = controlGroupValue.value;
          return true;
        }
        return false
      });
    }
  }
  if (element) {
    if (toUseOnChangeEvent && (controlValue === '' || controlValue === null)) {
      if (element instanceof HTMLInputElement) {
        element.checked = !(controlValue === '' || controlValue === null);
      }
    } else {
      if (element.value !== controlValue) {
        element.value = controlValue;
      }
    }
  }
};

export const updateValueInputsFromState = (
  formState: FormState,
  eventListeners: Array<ListenerObj>
) => {
  for (const evenListener of eventListeners) {
    const valueControlFromForm =
      formState.formValue[evenListener.controlName] || '';
    if (
      evenListener.element !== null &&
      evenListener.element.value !== valueControlFromForm
    ) {
      evenListener.element.value = valueControlFromForm.toString();
    }
  }
};
