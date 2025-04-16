import { Loader2 } from 'lucide-react';

type PrimaryButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
  };
  
  <button
  disabled={disabled}
  className={`
    px-4 py-2 rounded-md text-white transition
    ${disabled ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}
    ${className}
  `}
>