import { FormRule } from '../types';

export const max = {
  validate: (value: string | number, rule: FormRule) => {
    const valid = false;
    if (rule.params) {
      if (rule.params.isNumeric && typeof rule.params.max === 'number') {
        if (!value && value !== 0) {
          return true;
        }
        return Number(value) <= rule.params.max;
      } else {
        if (typeof value === 'string' && typeof rule.params.max === 'number') {
          return value.length <= rule.params.max;
        }
      }
    }
    return valid;
  }
};
