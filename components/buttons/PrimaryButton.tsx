// PrimaryButton.tsx
import React from 'react';

type Props = {
  label: string;
};

const PrimaryButton = ({ label }: Props) => {
  return (
    <button className="bg-blue-600 text-white px-4 py-2 rounded">
  {label}
</button>

  );
};

