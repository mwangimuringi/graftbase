type Validator = (value: string) => boolean;

export const validate = (value: string, validators: Validator[]): boolean => {
  return validators.every((validator) => validator(value));
};

// Example usage
const isValid = validate("Test123@", [isRequired, isStrongPassword]);
console.log(isValid); // true or false


export const isEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isStrongPassword = (password: string): boolean => {
  return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    password
  );
};

export const isNumber = (value: string): boolean => {
  return !isNaN(Number(value));
};
