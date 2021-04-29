import { FormRule } from '../types';

export const func = {
  validate: (value: string | object | null | number, rule: FormRule) => {
    let valid = true;
    if (rule.params && typeof rule.params.func === 'function') {
      valid = rule.params.func(value);
    }
    return valid;
  }
};
