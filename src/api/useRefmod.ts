import { useCallback, useEffect, useRef } from 'react';
import { isEqual } from '../utils';
import { addEventListeners } from '../stategy/refComponents/addEventListeners';
import { removeEventListeners } from '../stategy/refComponents/removeEventListeners';
import {
  FormState,
  ElementMod,
  ListenerObj,
  InputName,
  GetEventListeners,
  useRefModResult,
  GroupInputId
} from '../types';
import {
  updateValueInputFromState,
  toUseOnChangeEvent
} from '../stategy/refComponents/updateValueInputFromState';
import { Visibilities } from '../api/visibilities';
import { GetValue } from '../api/getValue';
import { GetError } from '../api/getError';
import { UpdateFormState } from '../api/useStateForm';
import { viewMode as _viewMode } from '../api/viewMode';

export type useRefModParams = {
  getFormState: () => FormState;
  inputName: InputName;
  getEventListeners: GetEventListeners;
  updateFormState: UpdateFormState;
  // updateEventListeners: (_eventListeners: Array<ListenerObj>) => void,
  deleteEventListener: (inputName: InputName) => void;
  getError: GetError;
  getValue: GetValue;
  getVisibilities: Visibilities;
};
export type UseRefMod = (params: useRefModParams) => useRefModResult;

export const useRefMod: UseRefMod = ({
  getFormState,
  inputName,
  getEventListeners,
  updateFormState,
  deleteEventListener,
  getError,
  getValue,
  getVisibilities
}) => {
  useEffect(() => {
    const eventListeners = getEventListeners();
    return () => {
      removeEventListeners({ inputName, eventListeners });
      deleteEventListener(inputName);
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
        const changed = !isEqual(
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

  const counter = useRef(0);
  counter.current += 1;

  const ref: (instance: HTMLInputElement | null) => void = useCallback(
    (element: ElementMod) => {
      const eventListeners = getEventListeners();
      if (element) {
        const groupInputId = element?.getAttribute('input-id') || undefined;

        const initInput = (
          indexReinit?: number,
          groupInputId?: number | string
        ) => {
          const listenerObj: ListenerObj = {
            timer: null,
            getFormState,
            inputName,
            groupInputId,
            element,
            listenerHandler: () => {}
          };
          listenerObj.listenerHandler = addEventListeners({
            element,
            inputName,
            groupInputId,
            updateFormState,
            getVisibilities
          }).bind(listenerObj);
          // set init value from formState
          updateValueInputFromState({
            getFormState,
            element,
            inputName,
            groupInputId,
            toUseOnChangeEvent: toUseOnChangeEvent(element)
          });

          if (
            !indexReinit ||
            (indexReinit &&
              !Object.is(element, eventListeners[indexReinit].element))
          ) {
            if (toUseOnChangeEvent(element)) {
              element.addEventListener('change', listenerObj.listenerHandler);
            } else {
              element.addEventListener('input', listenerObj.listenerHandler);
            }
          }

          if (typeof indexReinit === 'number') {
            if (
              !Object.is(
                listenerObj.element,
                eventListeners[indexReinit].element
              )
            ) {
              eventListeners[indexReinit] = listenerObj;
            }
          } else {
            eventListeners.push(listenerObj);
          }
        };

        const listener = eventListeners.find(
          (eventListener: ListenerObj, index) => {
            const isFound =
              eventListener.inputName === inputName &&
              eventListener.groupInputId === groupInputId;
            if (isFound) {
              initInput(index, groupInputId);
            }
            return isFound;
          }
        );

        if (listener) {
          // reinit input
          //console.log('reinit input', listener.inputName);
          // listener.getFormState = getFormState;
        } else {
          // init input
          //console.log('init input', inputName);

          initInput(undefined, groupInputId);
          // updateEventListeners();
        }
      }
    },
    [visibilitiesChanges(), counter.current]
  );
  // API
  return {
    ref,
    setViewMode: (viewMode: boolean) => {
      return _viewMode({ updateFormState }).setViewMode({
        formState: getFormState(),
        viewMode
      });
    },
    isViewMode: () => {
      return _viewMode({ updateFormState }).getViewMode({
        formState: getFormState()
      });
    },
    getError: (params: { inputId?: GroupInputId }) =>
      getError({
        formState: getFormState(),
        inputName,
        groupInputId: params?.inputId
      }),
    getValue: (params: { inputId?: GroupInputId }) => {
      return getValue({
        formState: getFormState(),
        inputName,
        groupInputId: params?.inputId
      });
    },
    isVisible: () => {
      const visibilities = getVisibilities({ getFormState });
      return visibilities.getVisibilityInput(inputName).isVisible;
    },
    isDisable: () => {
      const visibilities = getVisibilities({ getFormState });
      return visibilities.getVisibilityInput(inputName).disable;
    }
  };
};
