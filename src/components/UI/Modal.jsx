import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import "../../styles/components/Modal.css";

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen || !content) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <button className="modal-close" onClick={onClose}>
              <X size={24} />
            </button>

            <div className="modal-body">{content}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
