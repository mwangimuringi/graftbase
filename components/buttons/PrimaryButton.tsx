type PrimaryButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
  };
  
  <button
  onClick={onClick}
  className={`px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition ${className}`}
  type={type || 'button'}
>
  {children}
</button>
