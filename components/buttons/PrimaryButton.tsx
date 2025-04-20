type Props = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
};

const PrimaryButton = ({
  label,
  onClick,
  disabled,
  fullWidth,
  className = '',
}: Props) => {
  return (
    <button
      className={`px-4 py-2 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-300 ${
        disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600'
      } ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {label}
    </button>
  );
};
