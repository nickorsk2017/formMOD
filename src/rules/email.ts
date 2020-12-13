import {RuleResult} from "../classes";

export class EmailRule {
  static _name = "email";
  static validate = (value, rule) => {
    let valid = false;
    const test = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const match = value.match(test);
    if(match || value == null || value == "") {
      valid = true;
    }
    return new RuleResult({
      valid,
      name: EmailRule._name,
      message: valid ? "" : rule.message,
      params: {}
    })
  }
}
