import { setValue } from '../../api/setValue';
import { isEqual } from '../../utils';
import { InputName, ElementMod, GroupInputId } from '../../types';
import { Visibilities } from '../../api/visibilities';
import { toUseOnChangeEvent } from '../../stategy/refComponents/updateValueInputFromState';
import { UpdateFormState } from '../../api/useStateForm';

export type AddEventListenersProps = {
  element: ElementMod;
  inputName: InputName;
  groupInputId?: GroupInputId;
  updateFormState: UpdateFormState;
  getVisibilities: Visibilities;
  updateViewForm: () => void;
};
export type AddEventListeners = (
  params: AddEventListenersProps
) => (params?: any) => any;

export const addEventListeners: AddEventListeners = ({
  element,
  inputName,
  groupInputId,
  updateFormState,
  getVisibilities,
  updateViewForm
}) => {
  if (element instanceof HTMLElement) {
    const listenerHandler = function (event: any) {
      let inputValue = event.target.value;
      let timeout = 300;
      const v = this.getFormState().formValue[inputName];
      const valueFromFormState = !groupInputId ? v : v.value;
      // toggle value for checkbox, option
      if (toUseOnChangeEvent(event.target)) {
        if (typeof valueFromFormState !== 'string') {
          inputValue = !valueFromFormState;
        }
        //_skipUpdate = false;
        timeout = 0;
      }
      if (
        this.getFormState().formValue &&
        !isEqual(valueFromFormState, inputValue)
      ) {
        const formState = this.getFormState();
        setValue({
          formState,
          inputName,
          groupInputId,
          inputValue,
          updateFormState,
          skipUpdate: timeout ? true : false,
          getVisibilities,
          getFormState: this.getFormState
        });
        // debounce startegy
        if (timeout && formState.valid !== null) {
          clearTimeout(this.timer.current);
          this.timer.current = setTimeout(() => {
            updateViewForm();
          }, timeout);
        }
      }
    };
    // element.addEventListener("input", listenerHandler);
    return listenerHandler;
  }
  return () => {};
};
