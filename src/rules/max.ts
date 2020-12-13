import {RuleResult} from "../classes";

export class MaxRule {
  static _name = "max";
  static validate = (value, rule) => {
    let valid = false;
    if(rule.params && rule.params.max) {
      valid = value.length <= rule.params.max;
    }
    return new RuleResult({
      valid,
      name: MaxRule._name,
      message: valid ? "" : rule.message,
      params: {}
    })
  }
}
