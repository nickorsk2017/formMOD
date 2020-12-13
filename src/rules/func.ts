import {RuleResult} from "../classes";

export class FuncRule {
  static _name = "func";
  static validate = (value, rule) => {
    let valid = true;
    if(rule.params && typeof rule.params.func === "function") {
      valid = (rule.params.func(value));
    }
    return new RuleResult({
      valid,
      name: FuncRule._name,
      message: valid ? "" : rule.message,
      params: {}
    })
  }
}
