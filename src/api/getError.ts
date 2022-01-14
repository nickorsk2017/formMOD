import {
  FormState,
  FormRule,
  MessageError,
  InputName,
  GroupInputId
} from '../types';

export type GetErrorParams = {
  formState: FormState;
  inputName: InputName;
  groupInputId?: GroupInputId;
};

export type GetError = (params: GetErrorParams) => MessageError | null;

export const getError: GetError = ({ formState, inputName, groupInputId }) => {
  const rules = formState.rules;
  if (formState.valid !== null && rules && rules[inputName]) {
    const rulesInput = rules[inputName];
    let errorRule = null;
    if (groupInputId) {
      errorRule = rulesInput.find((rule: FormRule) => {
        if (
          rule.groupRules &&
          rule.groupRules[groupInputId] &&
          !rule.groupRules[groupInputId].valid
        ) {
          return true;
        }
        return false;
      });
    } else {
      errorRule = rulesInput.find((rule: FormRule) => {
        return !rule.valid;
      });
    }
    return errorRule ? errorRule.message : null;
  }
  return null;
};
