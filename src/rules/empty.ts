export const empty = {
  validate: (value: string | number) => {
    let valid = value != null && value !== '';
    if (Array.isArray(value)) {
      valid = value.length > 0;
    }
    return valid;
  }
};
