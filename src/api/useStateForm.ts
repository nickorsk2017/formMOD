import { useRef } from 'react';
import { useForceUpdate } from '../utils';
import { FormState } from '../types';

export type UpdateFormState = (
  newFormState: FormState,
  skipUpdate?: boolean,
  editMode?: boolean
) => FormState;

/**
 * This is custom state managment system for form
 * It need for improving performance, custom logic for inputs or form.
 */
export const useStateForm = (initFormState: FormState) => {
  const result = useRef(
    (() => {
      let formState: FormState = initFormState;
      let _initFormState = initFormState;
      let timout: ReturnType<typeof setTimeout> | null = null;
      //Needs for improving performance,no need to run rendering everytime.
      //useState can't skip rendering.
      const { forceUpdate } = useForceUpdate();
      let onInitEdit = false;
      const updateInitState = (newFormState: FormState) => {
        _initFormState = newFormState;
      };
      const getInitFormState = () => {
        return _initFormState;
      };
      const setState = (newFormState: FormState) => {
        formState = newFormState;
      };
      const setOnInitFromEdit = (state: boolean) => {
        onInitEdit = state;
      };
      const isOnInitEdit = () => {
        return onInitEdit;
      };

      const updateFormState: UpdateFormState = (
        newFormState,
        skipUpdate,
        editMode
      ) => {
        setState(newFormState);
        // fix multipale updates
        // need only one last
        if ((!skipUpdate || formState.valid !== null) && !editMode) {
          if (timout) {
            clearTimeout(timout);
          }
          timout = setTimeout(() => {
            forceUpdate();
          }, 5);
        }
        if (editMode && !isOnInitEdit()) {
          setOnInitFromEdit(true);
          updateInitState(newFormState);
        }
        return formState;
      };

      return {
        getFormState: () => formState,
        getInitFormState,
        updateFormState,
        isOnInitEdit
      };
    })()
  ).current;

  return result;
};
