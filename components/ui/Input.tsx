// /components/ui/Input.tsx
import React from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
  label?: string;
  id?: string;
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
}

const sizeClasses = {
  small: "px-2 py-1 text-sm",
  medium: "px-3 py-2 text-base",
  large: "px-4 py-3 text-lg",
};

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  disabled = false,
  error,
  label,
  id,
  size = "medium",
  icon,
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute inset-y-0 left-2 flex items-center">
            {icon}
          </span>
        )}
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`w-full border rounded-md focus:outline-none transition ${
            disabled
              ? "bg-gray-200 cursor-not-allowed"
              : "border-gray-300 focus:ring-2 focus:ring-blue-500"
          } ${error ? "border-red-500" : ""} ${sizeClasses[size]} ${
            icon ? "pl-8" : ""
          }`}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
        />
      </div>
      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
