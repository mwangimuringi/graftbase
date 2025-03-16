import React, { useState } from "react";

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  position?: "left" | "right";
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  position = "left",
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        className="bg-gray-200 px-4 py-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected || "Select an option"}
      </button>
      {isOpen && (
        <ul
          className={`absolute mt-2 bg-white border rounded-md shadow-lg ${
            position === "right" ? "right-0" : "left-0"
          }`}
        >
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
