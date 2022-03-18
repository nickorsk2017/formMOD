import { FormRule } from '../types';

export const func = {
  validate: (
    value: string | Record<string, any> | null | number,
    rule: FormRule
  ) => {
    let valid = true;
    if (rule.params && typeof rule.params.func === 'function') {
      valid = rule.params.func(value);
    }
    return valid;
  }
};
