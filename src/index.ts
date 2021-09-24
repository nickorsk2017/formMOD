import { useEffect, useMemo } from 'react';
import {
  getValue,
  setValue,
  setValues,
  getError,
  validate,
  resetForm,
  useRefMod,
  useStateForm,
  getVisibilities,
  groups,
  viewMode as _viewMode,
} from './api';
import {
  FormState,
  FormValue,
  ControlName,
  ListenerObj,
  GetEventListeners,
  ControlValue,
  ControlGroupValues,
  GroupControlId,
  ControlGroupValue,
} from './types';
export { useCountRender } from './utils';
export * as Types from './types';
export {useOptimisationInput} from "./api";

export const useFormMod = (
  initFormState: FormState,
  useControledForm: boolean | undefined = false
) => {
  const { getFormState, updateFormState } = useStateForm(initFormState);
  console.log(useControledForm, 'useControledForm!');

  const {
    deleteEventListener,
    deleteAllEventListeners,
    getEventListeners
  } = useMemo(() => {
    let eventListeners: Array<ListenerObj> = [];

    const updateEventListeners = (_eventListeners: Array<ListenerObj>) => {
      eventListeners = _eventListeners;
    };
    const deleteEventListener = (controlName: ControlName) => {
      eventListeners = eventListeners.filter((eventListener: any) => {
        return eventListener.controlName !== controlName;
      });
    };
    const deleteAllEventListeners = () => {
      eventListeners = [];
    };
    const getEventListeners: GetEventListeners = () => {
      return eventListeners;
    };
    return {
      getEventListeners,
      updateEventListeners,
      deleteEventListener,
      deleteAllEventListeners
    };
  }, []);

  useEffect(() => {
    return () => {
      console.log('unmount form');
      deleteAllEventListeners();
    };
  }, []);

  return {
    formState: getFormState(),
    setViewMode: (viewMode: boolean) => {
      return _viewMode({updateFormState}).setViewMode({formState: getFormState(), viewMode});
    },
    isViewMode: () => {
      return _viewMode({updateFormState}).getViewMode({formState: getFormState()});
    },
    getItemByIndex: ({controlName, index} : {controlName: ControlName, index: number}) => {
      return groups({updateFormState}).getItemByIndex({formState: getFormState(), controlName, index});
    },
    deleteGroupItem: ({controlName, groupControlId} : {controlName: ControlName, groupControlId: GroupControlId}) => {
      return groups({updateFormState}).deleteItem({formState: getFormState(), controlName, groupControlId});
    },
    addGroupItem: ({controlName, value} : {controlName: ControlName, value: ControlGroupValue}) => {
      return groups({updateFormState}).addItem({formState: getFormState(), controlName, controlGroupValue: value})
    },
    getGroup: (controlName: ControlName) => {
      return getValue({ formState: getFormState(), controlName }) as ControlGroupValues || [];
    },
    getValue: (controlName?: ControlName,  controlId?: GroupControlId,) =>
      getValue({ formState: getFormState(), controlName, groupControlId: controlId }),
    setValue: (
      controlName: ControlName,
      controlValue: ControlValue,
      skipUpdate?: boolean,
      controlId?: GroupControlId,
    ) =>
    setValue({
        formState: getFormState(),
        controlName,
        controlValue,
        groupControlId: controlId,
        updateFormState,
        skipUpdate,
        getVisibilities
      }),
    setValues: (controlsValues: FormValue) =>
      setValues({
        formState: getFormState(),
        controlsValues,
        updateFormState,
        getVisibilities
      }),
    validate: (updateValidation: boolean, callback: Function) =>
      validate({
        formState: getFormState(),
        updateValidation,
        callback,
        fromSetValue: false,
        updateFormState,
        getVisibilities
      }),
    getError: (controlName: ControlName, controlId?: GroupControlId) =>
      getError({ formState: getFormState(), controlName, groupControlId: controlId }),
    resetForm: () =>
      resetForm({
        initFormState,
        formState: getFormState(),
        updateFormState,
        getEventListeners
      }),
    useRefMod: (controlName: ControlName) =>
      useRefMod({
        getFormState,
        controlName,
        getEventListeners,
        updateFormState,
        deleteEventListener,
        getError,
        getValue,
        getVisibilities
    }),
    getVisibilities: () => getVisibilities({ getFormState }),
    isVisible: (controlName: ControlName) => {
      const visibilities = getVisibilities({ getFormState });
      return visibilities.getVisibilityControl(controlName).isVisible;
    },
  };
};
