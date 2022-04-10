import { useRef } from 'react';
import { useForceUpdate, convertShortRulesToObjects } from '../utils';
import { FormState, InitFormState } from '../types';

export type UpdateFormState = (
  newFormState: FormState,
  props?: {
    skipUpdate?: boolean;
    init?: boolean;
  }
) => FormState;

/**
 * This is custom state managment system for form
 * It need for improving performance, custom logic for inputs or form.
 */
export const useStateForm = (initFormState: InitFormState) => {
  const result = useRef(
    (() => {
      let _initFormState = convertShortRulesToObjects(initFormState);
      let formState: FormState = _initFormState;
      //for improving performance
      //useState can't skip rendering
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
      const updateViewForm = () => {
        forceUpdate();
      };

      const updateFormState: UpdateFormState = (newFormState, props) => {
        setState(newFormState);
        // fix multipale rendering in short time
        // need check a last state of form and render one time
        // for a big and difficult form
        if (!props?.skipUpdate && !props?.init) {
          forceUpdate();
        }
        if (props?.init && !isOnInitEdit()) {
          setOnInitFromEdit(true);
          updateInitState(newFormState);
        }
        return formState;
      };

      return {
        getFormState: () => formState,
        getInitFormState,
        updateFormState,
        isOnInitEdit,
        updateViewForm
      };
    })()
  ).current;

  return result;
};
