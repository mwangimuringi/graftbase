type ValidationResult = { valid: boolean; error?: string };

export const validateField = (value: string, rules: { validator: (v: string) => boolean; error: string }[]): ValidationResult => {
  for (const rule of rules) {
    if (!rule.validator(value)) {
      return { valid: false, error: rule.error };
    }
  }
  return { valid: true };
};

// Example usage
const result = validateField("Test123@", [
  { validator: isRequired, error: "Field is required" },
  { validator: isStrongPassword, error: "Password is too weak" },
]);
console.log(result); // { valid: true } or { valid: false, error: "..." }
