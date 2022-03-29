import { FormRule } from '../types';

export const max = {
  validate: (value: string | number, rule: FormRule) => {
    const valid = false;
    if (rule.params) {
      if (typeof value === 'number' && typeof rule.params.max === 'number') {
        return value <= rule.params.max;
      } else {
        if (typeof value === 'string' && typeof rule.params.max === 'number') {
          return value.length <= rule.params.max;
        }
      }
    }
    return valid;
  }
};
