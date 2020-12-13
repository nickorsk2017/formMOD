import {RuleResult} from "../classes";

export class MinRule {
  static _name = "min";
  static validate = (value, rule) => {
    let valid = false;
    if(rule.params && rule.params.min) {
      valid = value.length >= rule.params.min;
    }
    return new RuleResult({
      valid,
      name: MinRule._name,
      message: valid ? "" : rule.message,
      params: {}
    })
  }
}
