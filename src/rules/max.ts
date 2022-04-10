import { FormRule } from '../types';

export const max = {
  validate: (value: string, rule: FormRule) => {
    const valid = false;
    if (rule.params) {
      if (rule.params.isNumber && typeof rule.params.max === 'number') {
        if (!value) {
          return true;
        }
        return parseInt(value) <= rule.params.max;
      } else {
        if (typeof value === 'string' && typeof rule.params.max === 'number') {
          return value.length <= rule.params.max;
        }
      }
    }
    return valid;
  }
};
