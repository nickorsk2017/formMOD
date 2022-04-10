import { FormRule } from '../types';

export const min = {
  validate: (value: string | number, rule: FormRule) => {
    const valid = false;
    if (rule.params) {
      if (rule.params.isNumber && typeof rule.params.min === 'number') {
        if (!value && value !== 0) {
          return true;
        }
        return Number(value) >= rule.params.min;
      } else {
        if (typeof value === 'string' && typeof rule.params.min === 'number') {
          return value.length >= rule.params.min;
        }
      }
    }
    return valid;
  }
};
