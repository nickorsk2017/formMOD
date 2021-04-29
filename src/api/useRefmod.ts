import * as _ from 'lodash';
import { useCallback, useEffect, useRef } from 'react';
import { addEventListeners } from '../stategy/refComponents/addEventListeners';
import { removeEventListeners } from '../stategy/refComponents/removeEventListeners';
import {
  FormState,
  ElementMod,
  ListenerObj,
  ControlName,
  GetEventListeners,
  useRefModResult
} from '../types';
import {
  updateValueInputFromState,
  toUseOnChangeEvent
} from '../stategy/refComponents/updateValueInputFromState';
import { Visibilities } from '../api/visibilities';
import { GetValue } from '../api/getValue';
import { GetError } from '../api/getError';
import { UpdateFormState } from '../api/useStateForm';

export type useRefModParams = {
  getFormState: () => FormState;
  controlName: ControlName;
  getEventListeners: GetEventListeners;
  updateFormState: UpdateFormState;
  // updateEventListeners: (_eventListeners: Array<ListenerObj>) => void,
  deleteEventListener: (controlName: ControlName) => void;
  getError: GetError;
  getValue: GetValue;
  getVisibilities: Visibilities;
};
export type useRefMod = (params: useRefModParams) => useRefModResult;

export const useRefMod: useRefMod = ({
  getFormState,
  controlName,
  getEventListeners,
  updateFormState,
  deleteEventListener,
  getError,
  getValue,
  getVisibilities
}) => {
  useEffect(() => {
    const eventListeners = getEventListeners();
    console.log('mount element!!');
    return () => {
      console.log('unmount element!!');
      removeEventListeners({ controlName, eventListeners });
      deleteEventListener(controlName);
    };
  }, []);

  const { visibilitiesChanges } = useRef(
    (() => {
      let visibilitiesResult = getVisibilities({
        getFormState
      }).getVisibilitiesResult();
      let changedCount = 0;
      const getVisibilitiesResultNew = () => {
        return getVisibilities({ getFormState }).getVisibilitiesResult();
      };
      const visibilitiesChanges = () => {
        const changed = !_.isEqual(
          getVisibilitiesResultNew(),
          visibilitiesResult
        );
        if (changed) {
          changedCount++;
          visibilitiesResult = getVisibilitiesResultNew();
        }
        return changedCount;
      };
      return {
        visibilitiesChanges
      };
    })()
  ).current;

  const ref: (instance: HTMLInputElement | null) => void = useCallback(
    (element: ElementMod) => {
      const eventListeners = getEventListeners();
      if (element) {
        const initInput = (indexReinit?: number) => {
          const listenerObj: ListenerObj = {
            timer: null,
            getFormState,
            controlName,
            element,
            listenerHandler: () => {}
          };
          listenerObj.listenerHandler = addEventListeners({
            element,
            controlName,
            updateFormState,
            getVisibilities
          }).bind(listenerObj);
          // set init value from formState
          updateValueInputFromState(
            getFormState,
            element,
            controlName,
            toUseOnChangeEvent(element)
          );

          if (toUseOnChangeEvent(element)) {
            element.addEventListener('change', listenerObj.listenerHandler);
          } else {
            element.addEventListener('input', listenerObj.listenerHandler);
          }

          if (typeof indexReinit === 'number') {
            if (
              !Object.is(
                listenerObj.element,
                eventListeners[indexReinit].element
              )
            ) {
              console.log('new element');
              eventListeners[indexReinit] = listenerObj;
            }
            // eventListeners[indexReinit] = listenerObj;
          } else {
            eventListeners.push(listenerObj);
          }
        };

        const listener = eventListeners.find(
          (eventListener: ListenerObj, index) => {
            const isFound = eventListener.controlName == controlName;
            if (isFound) {
              initInput(index);
            }
            return eventListener.controlName == controlName;
          }
        );

        if (listener) {
          // reinit input
          console.log('reinit input', listener.controlName);

          // listener.getFormState = getFormState;
        } else {
          // init input
          console.log('init input', controlName);

          initInput();
          // updateEventListeners();
        }
      }
    },
    [visibilitiesChanges()]
  );
  // API
  return {
    ref,
    getError: () =>
      getError({
        formState: getFormState(),
        controlName
      }),
    getValue: () => {
      return getValue({ formState: getFormState(), controlName });
    },
    isVisible: () => {
      const visibilities = getVisibilities({ getFormState });
      return visibilities.getVisibilityControl(controlName).isVisible;
    },
    isDisable: () => {
      const visibilities = getVisibilities({ getFormState });
      return visibilities.getVisibilityControl(controlName).disable;
    }
  };
};
