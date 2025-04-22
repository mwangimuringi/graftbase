interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
  }

  interface ModalProps {
    ...
    footer?: React.ReactNode;
  }
  
  {children}
  {footer && <div className="mt-4">{footer}</div>}
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  // TODO: Implement tab key focus trap for better keyboard navigation


  <div
  onClick={(e) => e.stopPropagation()}
  className={`bg-white p-4 rounded ${className ?? 'w-96'}`}
>
  

  
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 opacity-100">
<div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
  <div onClick={(e) => e.stopPropagation()} className="bg-white p-4 rounded">
