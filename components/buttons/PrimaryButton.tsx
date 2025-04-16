import { Loader2 } from 'lucide-react';

type PrimaryButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
  };

  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  };
  
  <button
  disabled={disabled}
  className={`
    px-4 py-2 rounded-md text-white transition
    ${disabled ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}
    ${className}
  `}
>
className={`
  px-4 py-2 rounded-md text-white transition flex items-center justify-center
  ${disabled ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}
  ${fullWidth ? 'w-full' : ''}
  ${className}
`}