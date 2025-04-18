import React from 'react';

interface ToggleButtonProps {
  isOn?: boolean;
  onToggle?: (value: boolean) => void;
  onLabel?: string;
  offLabel?: string;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  isOn,
  onToggle,
  onLabel = 'On',
  offLabel = 'Off',
}) => {
  const [internalState, setInternalState] = React.useState(false);
  const active = isOn !== undefined ? isOn : internalState;

  const toggle = () => {
    if (onToggle) {
      onToggle(!active);
    } else {
      setInternalState(!active);
    }
  };

  return (
    <button
      onClick={toggle}
      className={`px-4 py-2 rounded text-white ${
        active ? 'bg-green-400' : 'bg-red-400'
      }`}
    >
      {active ? onLabel : offLabel}
    </button>
  );
};
