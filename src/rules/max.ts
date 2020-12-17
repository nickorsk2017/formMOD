import { FormRule } from "../types";

export class max {
  static validate = (value: string | number, rule: FormRule) => {
    let valid = false;
    if(rule.params){
      if(typeof value === "number" && typeof rule.params.min === "number"){
        return value <= rule.params.min;
      } else {
        if(typeof value === "string" && typeof rule.params.min === "number") {
          return value.length <= rule.params.min;
        }
      }
    }
    return valid;
  }
}
