import React from 'react';

interface ToggleButtonProps {
  isOn?: boolean;
  onToggle?: (value: boolean) => void;
  onLabel?: string;
  offLabel?: string;
  disabled?: boolean;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  isOn,
  onToggle,
  onLabel = 'On',
  offLabel = 'Off',
  disabled = false,
}) => {
  const [internalState, setInternalState] = React.useState(false);
  const active = isOn !== undefined ? isOn : internalState;

  const toggle = () => {
    if (disabled) return;
    if (onToggle) {
      onToggle(!active);
    } else {
      setInternalState(!active);
    }
  };

  return (
    <button
      onClick={toggle}
      disabled={disabled}
      className={`px-4 py-2 rounded text-white transition ${
        disabled
          ? 'bg-gray-400 cursor-not-allowed'
          : active
          ? 'bg-green-400'
          : 'bg-red-400'
      }`}
    >
      {active ? onLabel : offLabel}
    </button>
  );
};
