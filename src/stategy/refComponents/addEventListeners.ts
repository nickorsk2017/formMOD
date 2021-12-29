import { setValue } from '../../api/setValue';
import * as _ from 'lodash';
import { InputName, ElementMod, GroupInputId } from '../../types';
import { Visibilities } from '../../api/visibilities';
import { toUseOnChangeEvent } from '../../stategy/refComponents/updateValueInputFromState';
import { UpdateFormState } from '../../api/useStateForm';

export type AddEventListenersParams = {
  element: ElementMod;
  inputName: InputName;
  groupInputId?: GroupInputId;
  updateFormState: UpdateFormState;
  getVisibilities: Visibilities;
};
export type AddEventListeners = (
  params: AddEventListenersParams
) => (params?: any) => any;

export const addEventListeners: AddEventListeners = ({
  element,
  inputName,
  groupInputId,
  updateFormState,
  getVisibilities
}) => {
  if (element instanceof HTMLElement) {
    const listenerHandler = function (event: any) {
      let inputValue = event.target.value;
      let _skipUpdate = true;
      let timeout = 300;
      const v = this.getFormState().formValue[inputName];
      const valueFromFormState = !groupInputId ? v : v.value;
      // toggle value for checkbox, option
      if (toUseOnChangeEvent(event.target)) {
        if (typeof valueFromFormState !== 'string') {
          inputValue = !valueFromFormState;
        }
        _skipUpdate = false;
        timeout = 0;
      }
      if (
        this.getFormState().formValue &&
        !_.isEqual(valueFromFormState, inputValue)
      ) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          console.log('change');
          setValue({
            formState: this.getFormState(),
            inputName,
            groupInputId,
            inputValue,
            updateFormState,
            skipUpdate: _skipUpdate,
            getVisibilities
          });
        }, timeout);
      }
    };
    // element.addEventListener("input", listenerHandler);
    return listenerHandler;
  }
  return () => {};
};
