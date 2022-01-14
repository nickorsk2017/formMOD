import { cloneDeep } from '../utils';
import { FormState } from '../types';

export type ViewModeParams = {
  updateFormState: (updateFormState: FormState) => void;
};

export type SetViewMode = (params: {
  formState: FormState;
  viewMode: boolean;
}) => boolean;
export type GetViewMode = (params: { formState: FormState }) => boolean;

export type ViewMode = (params: ViewModeParams) => {
  setViewMode: SetViewMode;
  getViewMode: GetViewMode;
};

export const viewMode: ViewMode = ({ updateFormState }) => {
  const setViewMode: SetViewMode = ({ formState, viewMode }) => {
    if (formState.viewMode !== viewMode) {
      const _formState: FormState = cloneDeep(formState) as FormState;
      _formState.viewMode = viewMode;
      updateFormState(_formState);
    }
    return false;
  };
  const getViewMode: GetViewMode = ({ formState }) => {
    if (typeof formState.viewMode === 'undefined') {
      return false;
    }
    return formState.viewMode;
  };
  return {
    setViewMode,
    getViewMode
  };
};
