import { FormRule } from "../types";

export class func {
  static validate = (value: string | object | null | number, rule: FormRule) => {
    let valid = true;
    if(rule.params && typeof rule.params.func === "function") {
      valid = (rule.params.func(value));
    }
    return valid
  }
}
