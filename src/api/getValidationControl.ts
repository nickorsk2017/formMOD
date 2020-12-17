import * as _ from 'lodash';
import * as RulesAPI from "../rules";
import {
    FormState,
    ControlName,
    FormRule,
    ResultValidationControl,
    ControlValue,
} from "../types";

export function getValidationControl({formState, controlName, controlValue} : {formState: FormState, controlName: ControlName, controlValue: ControlValue}): ResultValidationControl | null {
    const rules = formState.rules;
    if(rules){
        const rulesControl = rules[controlName];
        let controlIsValid = true;
        const resultRulesControl = rulesControl.map((ruleControl: FormRule) => {
            if(RulesAPI[ruleControl.name]){
                const isValid = RulesAPI[ruleControl.name].validate(controlValue, ruleControl);
                if(isValid === false){
                    controlIsValid = isValid;
                }
                if(isValid !== ruleControl.valid || typeof ruleControl.valid === "undefined"){
                    let newRuleControl: FormRule = _.cloneDeep(ruleControl);
                    newRuleControl.valid = isValid;
                    return newRuleControl;
                }
            }
            return ruleControl;
        });
        return {rulesControl: resultRulesControl, validationStatus: controlIsValid}
    }
    return null;
}