import * as Rules from "../rules";
import {getValue} from './';
import {ControlValue, FormSetting} from "../types";
import {RuleResult} from "../classes";

function getValidationRuleResult(rule, controlValue: ControlValue, controlName: string) {
    let ruleResult: RuleResult = Rules.ValidRule.validate();
    Object.keys(Rules).some(ruleClassName => {
        const validator = Rules[ruleClassName];
        if(rule.name === validator._name){
            ruleResult = validator.validate(controlValue, rule);
            return true;
        }
        return false;
    });
    return {
        controlName,
        ruleResult,
        valid: ruleResult.valid
    };
}

export function getStateControl({formSettings, controlName, controlValue = null} : {formSettings: FormSetting, controlName?: string, controlValue: ControlValue}) {
    const rulesOfInput = formSettings.rules[controlName] || [];
    return rulesOfInput.map(rule => {
        let value = controlValue;
        if(!value){
            // need to fix manuallyDisabledControls
            value = getValue({formSettings, controlName, manuallyDisabledControls: []})
        }
        return getValidationRuleResult(rule, value, controlName);
    });
}