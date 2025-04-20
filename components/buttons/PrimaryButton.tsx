type Props = {
  label: string;
  onClick?: () => void;
};

const PrimaryButton = ({ label, onClick }: Props) => {
  return (
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
