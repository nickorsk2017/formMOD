import * as _ from 'lodash';
import { useRef } from 'react';
import { useForceUpdate } from '../utils';
import { FormState } from '../types';

export type UpdateFormState = (
  newFormState: FormState,
  skipUpdate?: boolean
) => FormState;

export const useStateForm = (initFormState: FormState) => {
  const result = useRef(
    (() => {
      let formState: FormState = initFormState;
      let timout: ReturnType<typeof setTimeout> | null = null;
      const { forceUpdate } = useForceUpdate();

      const setSate = (newFormState: FormState) => {
        formState = newFormState;
      };

      const updateFormState: UpdateFormState = (newFormState, skipUpdate) => {
        setSate(newFormState);
        // fix multipale updates
        // need only one last
        if (!skipUpdate || formState.valid !== null) {
          if (timout) {
            clearTimeout(timout);
          }
          timout = setTimeout(() => {
            forceUpdate();
          }, 20);
        }
        return formState;
      };

      return {
        getFormState: () => formState,
        updateFormState
      };
    })()
  ).current;

  return result;
};
