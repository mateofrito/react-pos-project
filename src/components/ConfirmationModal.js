import React from 'react';

const ConfirmationModal= ({ isOpen, onClose, modalText }) => {
  if (!isOpen) return null;
  console.log("Modal isOpen:", isOpen);
  
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <p>{modalText}</p>
        <button className="modal-button" onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;