import { FormRule } from '../types';

export const min = {
  validate: (value: string, rule: FormRule) => {
    const valid = false;
    if (rule.params) {
      if (rule.params.isNumber && typeof rule.params.min === 'number') {
        if (!value) {
          return true;
        }
        return parseInt(value) >= rule.params.min;
      } else {
        if (typeof value === 'string' && typeof rule.params.min === 'number') {
          return value.length >= rule.params.min;
        }
      }
    }
    return valid;
  }
};
