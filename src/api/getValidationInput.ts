import * as _ from 'lodash';
import * as RulesAPI from '../rules';
import {
  FormState,
  InputName,
  FormRule,
  ResultValidationInput,
  InputValue,
  InputGroupValues
} from '../types';

export function getValidationInput({
  formState,
  inputName,
  inputValue
}: {
  formState: FormState;
  inputName: InputName;
  inputValue: InputValue;
}): ResultValidationInput | null {
  const rules = formState.rules;
  if (rules) {
    const rulesInput = rules[inputName];
    let inputIsValid = true;
    const resultrulesInput = rulesInput.map((ruleInput: FormRule) => {
      if (RulesAPI[ruleInput.name]) {
        const newRuleInput: FormRule = _.cloneDeep(ruleInput);
        let isValid = true;
        // if is group input
        if (Array.isArray(inputValue)) {
          if (!newRuleInput.groupRules) {
            newRuleInput.groupRules = {};
          }
          (inputValue as InputGroupValues).forEach((v) => {
            const valid = RulesAPI[ruleInput.name].validate(v.value, ruleInput);
            if (!valid) {
              inputIsValid = false;
            }
            if (newRuleInput && newRuleInput.groupRules) {
              newRuleInput.groupRules[v.id] = {
                id: v.id,
                valid
              };
            }
          });
          return newRuleInput;
        } else {
          isValid = RulesAPI[ruleInput.name].validate(inputValue, ruleInput);
          if (isValid === false) {
            inputIsValid = isValid;
          }
          if (
            isValid !== ruleInput.valid ||
            typeof ruleInput.valid === 'undefined'
          ) {
            newRuleInput.valid = isValid;
            return newRuleInput;
          }
        }
      }
      return ruleInput;
    });
    return {
      rulesInput: resultrulesInput,
      validationStatus: inputIsValid
    };
  }
  return null;
}
