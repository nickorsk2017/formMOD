import * as _ from 'lodash';
import * as RulesAPI from '../rules';
import {
  FormState,
  ControlName,
  FormRule,
  ResultValidationControl,
  ControlValue,
  ControlGroupValues,
} from '../types';

export function getValidationControl({
  formState,
  controlName,
  controlValue
}: {
  formState: FormState;
  controlName: ControlName;
  controlValue: ControlValue;
}): ResultValidationControl | null {
  const rules = formState.rules;
  if (rules) {
    const rulesControl = rules[controlName];
    let controlIsValid = true;
    const resultRulesControl = rulesControl.map((ruleControl: FormRule) => {
      if (RulesAPI[ruleControl.name]) {
        let newRuleControl: FormRule = _.cloneDeep(ruleControl);
        let isValid = true;
        // if is group of controls
        if(Array.isArray(controlValue)){
          if(!newRuleControl.groupRules){
            newRuleControl.groupRules = {};
          }
          (controlValue as ControlGroupValues).forEach((v) => {
            const valid = RulesAPI[ruleControl.name].validate(
              v.value,
              ruleControl
            );
            if(!valid){
              controlIsValid = false;
            }
            console.log(v.id, v.value, valid, "!!!!!!!!!!!!");
            if(newRuleControl && newRuleControl.groupRules){
              newRuleControl.groupRules[v.id] = {
                id: v.id,
                valid
              };
              console.log(newRuleControl, "2!!!!!!!!!!!!");
            } 
          });
          return newRuleControl;
        } else {
          isValid = RulesAPI[ruleControl.name].validate(
            controlValue,
            ruleControl
          );
          if (isValid === false) {
            controlIsValid = isValid;
          }
          if (
            isValid !== ruleControl.valid ||
            typeof ruleControl.valid === 'undefined'
          ) {
            newRuleControl.valid = isValid;
            return newRuleControl;
          }
        }
      }
      return ruleControl;
    });
    return {
      rulesControl: resultRulesControl,
      validationStatus: controlIsValid
    };
  }
  return null;
}
