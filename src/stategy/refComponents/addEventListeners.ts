import { setValue } from '../../api/setValue';
import * as _ from 'lodash';
import { ControlName, ElementMod, GroupControlId } from '../../types';
import { Visibilities } from '../../api/visibilities';
import { toUseOnChangeEvent } from '../../stategy/refComponents/updateValueInputFromState';
import { UpdateFormState } from '../../api/useStateForm';

export type AddEventListenersParams = {
  element: ElementMod;
  controlName: ControlName;
  groupControlId?: GroupControlId,
  updateFormState: UpdateFormState;
  getVisibilities: Visibilities;
};
export type AddEventListeners = (params: AddEventListenersParams) => Function;

export const addEventListeners: AddEventListeners = ({
  element,
  controlName,
  groupControlId,
  updateFormState,
  getVisibilities
}) => {
  if (element instanceof HTMLElement) {
    const listenerHandler = function (event: any) {
      let controlValue = event.target.value;
      let _skipUpdate = true;
      let timeout = 300;
      const v = this.getFormState().formValue[controlName];
      const valueFromFormState = !groupControlId ? v : v.value;
      // toggle value for checkbox, option
      if (toUseOnChangeEvent(event.target)) {
        if (typeof valueFromFormState !== 'string') {
          controlValue = !valueFromFormState;
        }
        _skipUpdate = false;
        timeout = 0;
      }
      if (
        this.getFormState().formValue &&
        !_.isEqual(valueFromFormState, controlValue)
      ) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          setValue({
            formState: this.getFormState(),
            controlName,
            groupControlId,
            controlValue,
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
