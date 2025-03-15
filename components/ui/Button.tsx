// /components/ui/Button.tsx
import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  disabled = false,
  loading = false,
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md transition duration-300 flex items-center justify-center";
  const variantStyles =
    variant === "primary"
      ? "bg-blue-500 text-white hover:bg-blue-600"
      : "bg-gray-500 text-white hover:bg-gray-600";

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variantStyles} ${
        disabled || loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      aria-disabled={disabled || loading}
    >
      {loading ? "Loading..." : label}
    </button>
  );
};

export default Button;
