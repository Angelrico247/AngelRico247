import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose, children, layoutId }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal__overlay" onClick={onClose}>
          <motion.div 
            className="modal__content"
            layoutId={layoutId} // Para el efecto de expansión desde la tarjeta
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()} // Evita cerrar al clickear dentro
          >
            <button className="modal__close" onClick={onClose}>
              <i className="uil uil-times"></i> {/* Usando Unicons como en tu botón Contact */}
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;