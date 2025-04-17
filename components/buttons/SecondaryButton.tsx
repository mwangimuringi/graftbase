export {};

import React from 'react';
import { Loader2 } from 'lucide-react';

type SecondaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  loading = false,
  fullWidth = false,
  size = 'md',
})