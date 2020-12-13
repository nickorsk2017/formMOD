import {RuleResult} from "../classes";

export class ValidRule {
  static _name = "none";
  static validate = () => {
    return new RuleResult({
      valid: true,
      name: ValidRule._name,
      message: "",
      params: {}
    })
  }
}
