// /components/modals/SettingsModal.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-labelledby="settings-modal-title"
      aria-modal="true"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-lg w-96"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <h2 id="settings-modal-title" className="text-xl font-semibold">
          Settings
        </h2>
        <div className="mt-4">
          <label className="flex justify-between items-center">
            <span>Dark Mode</span>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            />
          </label>
          <label className="flex justify-between items-center mt-2">
            <span>Enable Notifications</span>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              aria-label="Toggle notifications"
            />
          </label>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded"
            onClick={onClose}
            aria-label="Close Settings Modal"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SettingsModal;
