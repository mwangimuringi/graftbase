// /components/modals/ConfirmModal.tsx
import React from "react";
import { motion } from "framer-motion";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Are you sure?",
  message = "This action cannot be undone.",
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-labelledby="confirm-modal-title"
      aria-modal="true"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <p id="confirm-modal-title" className="text-lg font-semibold">
          {title}
        </p>
        <p className="text-sm text-gray-600 mt-2">{message}</p>
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 mr-2 bg-gray-300 rounded"
            onClick={onClose}
            aria-label="Cancel"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded"
            onClick={onConfirm}
            aria-label="Confirm"
          >
            Confirm
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ConfirmModal;
