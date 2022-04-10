import { FormRule } from '../types';

export const custom = {
  validate: (
    value: string | Record<string, any> | null | number,
    rule: FormRule
  ) => {
    let valid = true;
    if (rule.params && typeof rule.params.rule === 'function') {
      valid = rule.params.rule(value);
    }
    return valid;
  }
};
