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
  viewMode as _viewMode
} from './api';
import {
  FormState,
  FormValue,
  InputName,
  ListenerObj,
  GetEventListeners,
  InputValue,
  InputGroupValues,
  GroupInputId,
  InputGroupValue
} from './types';
export { useCountRender } from './utils';
export * as Types from './types';
export { useDebounce } from './api';

export const useFormMod = (initFormState: FormState) => {
  const { getFormState, updateFormState, isOnInitEdit, getInitFormState } =
    useStateForm(initFormState);

  const { deleteEventListener, deleteAllEventListeners, getEventListeners } =
    useMemo(() => {
      let eventListeners: Array<ListenerObj> = [];

      const updateEventListeners = (_eventListeners: Array<ListenerObj>) => {
        eventListeners = _eventListeners;
      };
      const deleteEventListener = (inputName: InputName) => {
        eventListeners = eventListeners.filter((eventListener: any) => {
          return eventListener.inputName !== inputName;
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
      deleteAllEventListeners();
    };
  }, []);

  return {
    formState: getFormState(),
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
    getItemByIndex: ({
      inputName,
      index
    }: {
      inputName: InputName;
      index: number;
    }) => {
      return groups({ updateFormState }).getItemByIndex({
        formState: getFormState(),
        inputName,
        index
      });
    },
    deleteGroupItem: ({
      inputName,
      groupInputId
    }: {
      inputName: InputName;
      groupInputId: GroupInputId;
    }) => {
      return groups({ updateFormState }).deleteItem({
        formState: getFormState(),
        inputName,
        groupInputId
      });
    },
    addGroupItem: ({
      inputName,
      value
    }: {
      inputName: InputName;
      value: InputGroupValue;
    }) => {
      return groups({ updateFormState }).addItem({
        formState: getFormState(),
        inputName,
        inputGroupValue: value
      });
    },
    getGroup: (inputName: InputName) => {
      return (
        (getValue({
          formState: getFormState(),
          inputName
        }) as InputGroupValues) || []
      );
    },
    getValue: (inputName?: InputName, inputId?: GroupInputId) =>
      getValue({
        formState: getFormState(),
        inputName,
        groupInputId: inputId
      }),
    setValue: (
      inputName: InputName,
      inputValue: InputValue,
      skipUpdate?: boolean,
      inputId?: GroupInputId,
      skipValidation?: boolean
    ) =>
      setValue({
        formState: getFormState(),
        inputName,
        inputValue,
        groupInputId: inputId,
        updateFormState,
        skipUpdate,
        getVisibilities,
        skipValidation
      }),
    setValues: (
      inputsValues: FormValue,
      props?: { init?: boolean; skipUpdate?: boolean }
    ) => {
      return setValues({
        formState: getFormState(),
        inputsValues: inputsValues,
        updateFormState,
        getVisibilities,
        init: props?.init || false,
        skipUpdate: props?.skipUpdate || false,
        getFormState,
        isOnInitEdit: isOnInitEdit()
      });
    },
    validate: (
      updateValidation: boolean,
      callback: (valide: boolean | null, formValue: FormValue) => any
    ) =>
      validate({
        formState: getFormState(),
        updateValidation,
        callback,
        fromSetValue: false,
        updateFormState,
        getVisibilities,
        getFormState
      }),
    getError: (inputName: InputName, inputId?: GroupInputId) =>
      getError({
        formState: getFormState(),
        inputName,
        groupInputId: inputId
      }),
    resetForm: () =>
      resetForm({
        initFormState: getInitFormState(),
        formState: getFormState(),
        updateFormState,
        getEventListeners
      }),
    useRefMod: (inputName: InputName) =>
      useRefMod({
        getFormState,
        inputName,
        getEventListeners,
        updateFormState,
        deleteEventListener,
        getError,
        getValue,
        getVisibilities,
        setValue
      }),
    getVisibilities: () => getVisibilities({ getFormState }),
    isVisible: (inputName: InputName) => {
      const visibilities = getVisibilities({ getFormState });
      return visibilities.getVisibilityInput(inputName).isVisible;
    }
  };
};
