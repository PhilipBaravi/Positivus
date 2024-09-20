// AlertModal.js
import React from "react";

export default function AlertModal({
  showModal,
  setShowModal,
  title,
  message,
}) {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={() => setShowModal(false)}
      ></div>
      <div
        className="bg-white text-black p-6 rounded-lg z-10 max-w-md w-full mx-4"
        role="dialog"
        aria-modal="true"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {title || "Alert"}
        </h2>
        <p className="mb-6 text-center">
          {message || "This is an alert message."}
        </p>
        <button
          onClick={() => setShowModal(false)}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
}
