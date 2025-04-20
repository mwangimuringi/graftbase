// PrimaryButton.tsx
import React from 'react';

type Props = {
  label: string;
};

const PrimaryButton = ({ label }: Props) => {
  return (
    <button>
      {label}
    </button>
  );
};

