import React, { useState } from "react";

interface DropdownProps {
  options: { label: string; icon?: React.ReactNode; disabled?: boolean }[];
  onSelect: (option: string) => void;
  position?: "left" | "right";
  className?: string;
  disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  position = "left",
  className,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (option: string, isDisabled: boolean) => {
    if (isDisabled) return;
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        className={`px-4 py-2 rounded-md ${
          disabled ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200"
        }`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
      >
        {selected || "Select an option"}
      </button>
      {isOpen && (
        <ul
          className={`absolute mt-2 bg-white border rounded-md shadow-lg ${
            position === "right" ? "right-0" : "left-0"
          }`}
        >
          {options.map(({ label, icon, disabled }) => (
            <li
              key={label}
              className={`flex items-center px-4 py-2 cursor-pointer ${
                disabled
                  ? "text-gray-400 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleSelect(label, !!disabled)}
            >
              {icon && <span className="mr-2">{icon}</span>}
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
