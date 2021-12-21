import * as _ from 'lodash';
import { useRef } from 'react';
import { useForceUpdate } from '../utils';
import { FormState } from '../types';

export type UpdateFormState = (
  newFormState: FormState,
  skipUpdate?: boolean,
  editMode?: boolean
) => FormState;

export const useStateForm = (initFormState: FormState) => {
  const result = useRef(
    (() => {
      let formState: FormState = initFormState;
      let _initFormState = initFormState;
      let timout: ReturnType<typeof setTimeout> | null = null;
      const { forceUpdate } = useForceUpdate();
      let onInitEdit = false; 

      const updateInitState = (newFormState: FormState) => {
        _initFormState = newFormState;
      };
      const getInitFormState = () => {
        return _initFormState;
      }
      const setState = (newFormState: FormState) => {
        formState = newFormState;
      };
      const setOnInitFromEdit = (state: boolean) => {
        onInitEdit = state;
      };
      const isOnInitEdit = () => {
        return onInitEdit;
      };

      const updateFormState: UpdateFormState = (newFormState, skipUpdate, editMode) => {
        setState(newFormState);
        // fix multipale updates
        // need only one last
        if ((!skipUpdate || formState.valid !== null) && !editMode) {
          if (timout) {
            clearTimeout(timout);
          }
          timout = setTimeout(() => {
            forceUpdate();
          }, 20);
        }
        if(editMode && !isOnInitEdit()){
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
