import React, { useState } from "react";

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : prev));
    } else if (event.key === "ArrowUp") {
      setFocusedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (event.key === "Enter" && focusedIndex !== -1) {
      handleSelect(options[focusedIndex]);
    }
  };

  return (
    <div className="relative" tabIndex={0} onKeyDown={handleKeyDown}>
      <button
        className="bg-gray-200 px-4 py-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected || "Select an option"}
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 bg-white border rounded-md shadow-lg">
          {options.map((option, index) => (
            <li
              key={option}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                focusedIndex === index ? "bg-gray-300" : ""
              }`}
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
