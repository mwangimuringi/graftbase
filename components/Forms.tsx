// Modal.tsx
import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  footer?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  footer,
  className,
  children,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 opacity-100 z-50"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
        className={`bg-white p-6 rounded-lg shadow-lg ${className ?? 'w-96'}`}
      >
        {title && (
          <h2 id="modal-title" className="text-lg font-semibold mb-4">
            {title}
          </h2>
        )}
        <div>{children}</div>
        {footer && <div className="mt-6">{footer}</div>}
        {/* TODO: Implement tab key focus trap for better keyboard navigation */}
      </div>
    </div>
  );
};

export default Modal;
