type Props = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
};

const PrimaryButton = ({ label, onClick, disabled }: Props) => {
  return (
    <button
      className={`px-4 py-2 rounded text-white ${
        disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600'
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
