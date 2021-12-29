import * as _ from 'lodash';
import { FormState, InputName } from '../types';

export type VisibilitiesParams = {
  getFormState: () => FormState;
};
/* export type getVisibilitiesResultParams = {
  getFormState: () => FormState,
} */
export type VisibilityResult = { disable: boolean; isVisible: boolean };

export type GetVisibilitiesResult = () => {
  [key: string]: VisibilityResult;
};

export type GetVisibilityInput = (inputName: InputName) => VisibilityResult;

export type Visibilities = (
  params: VisibilitiesParams
) => {
  getVisibilityInput: GetVisibilityInput;
  getVisibilitiesResult: GetVisibilitiesResult;
};

export const getVisibilities: Visibilities = ({ getFormState }) => {
  const getVisibilityInput: GetVisibilityInput = (inputName) => {
    const visibilities = getFormState().visibilities;
    if (
      visibilities &&
      visibilities[inputName] &&
      typeof visibilities[inputName] === 'function'
    ) {
      const formValue = getFormState().formValue;
      const result = visibilities[inputName]({ formValue });

      if (
        typeof result === 'object' &&
        (typeof result?.disable === 'boolean' ||
          typeof result?.isVisible === 'boolean')
      ) {
        return {
          disable: result?.disable || false,
          isVisible:
            typeof result.isVisible == 'boolean' ? result.isVisible : true
        };
      }
    }
    return {
      disable: false,
      isVisible: true
    };
  };
  const getVisibilitiesResult: GetVisibilitiesResult = () => {
    const visibilities = getFormState().visibilities || {};
    const result = {};
    for (const key in visibilities) {
      result[key] = getVisibilityInput(key);
    }
    return result;
  };

  return {
    getVisibilityInput,
    getVisibilitiesResult
  };
};
