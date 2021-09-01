import * as _ from 'lodash';
import { FormState, FormRule, MessageError, ControlName, GroupControlId } from '../types';

export type GetErrorParams = {
  formState: FormState;
  controlName: ControlName;
  groupControlId?: GroupControlId;
};

export type GetError = (params: GetErrorParams) => MessageError | null;

export const getError: GetError = ({ formState, controlName, groupControlId }) => {
  const rules = formState.rules;
  if (formState.valid !== null && rules && rules[controlName]) {
    const rulesControl = rules[controlName];
    let errorRule = null;
    if(groupControlId){
      errorRule = rulesControl.find((rule: FormRule) => {
        if(rule.groupRules && rule.groupRules[groupControlId] && !rule.groupRules[groupControlId].valid){
          return true;
        }
        return false;
      });
    } else {
      errorRule = rulesControl.find((rule: FormRule) => {
        return !rule.valid;
      });
    }
    return errorRule ? errorRule.message : null;
  }
  return null;
};
