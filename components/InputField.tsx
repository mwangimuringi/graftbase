'use client';

import React, { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, ...props }, ref) => {
    return (
      <div>
        <label>{label}</label>
        <input ref={ref} {...props} />
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
