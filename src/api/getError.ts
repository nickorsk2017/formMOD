import * as _ from 'lodash';
import { FormState, FormRule, MessageError, ControlName } from '../types';

export type GetErrorParams = {
  formState: FormState;
  controlName: ControlName;
};

export type GetError = (params: GetErrorParams) => MessageError | null;

export const getError: GetError = ({ formState, controlName }) => {
  const rules = formState.rules;
  if (formState.valid !== null && rules && rules[controlName]) {
    const rulesControl = rules[controlName];
    const errorRule = rulesControl.find((rule: FormRule) => {
      return !rule.valid;
    });
    return errorRule ? errorRule.message : null;
  }
  return null;
};
