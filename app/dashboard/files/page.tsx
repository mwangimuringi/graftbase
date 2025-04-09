"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const mockFiles = [
  { name: "resume.pdf", uploadedAt: "2025-04-01" },
  { name: "report.xlsx", uploadedAt: "2025-03-28" },
  { name: "invoice.docx", uploadedAt: "2025-03-20" },
];

export default function FilesPage() {
  const [query, setQuery] = useState("");

  const filteredFiles = mockFiles.filter((file) =>
    file.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Your Files</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Upload File
        </button>
      </div>

      <input
        type="text"
        placeholder="Search files..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded"
      />

      <ul className="bg-white divide-y rounded shadow">
        <AnimatePresence>
          {filteredFiles.length > 0 ? (
            filteredFiles.map((file, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="p-4 flex justify-between"
              >
                <span>{file.name}</span>
                <span className="text-sm text-gray-400">Uploaded {file.uploadedAt}</span>
              </motion.li>
            ))
          ) : (
            <motion.li
              key="no-files"
              className="p-4 text-center text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              No matching files found.
            </motion.li>
          )}
        </AnimatePresence>
      </ul>
    </section>
  );
}
