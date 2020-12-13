import {RuleResult} from "../classes";

export class EmptyRule {
  static _name = "empty";
  static validate = (value, rule) => {
    let valid = (value != null && value !== '');
    if(Array.isArray(value)) {
      valid = value.length > 0;
    }
    return new RuleResult({
      valid,
      name: EmptyRule._name,
      message: valid ? "" : rule.message,
      params: {}
    })
  }
}