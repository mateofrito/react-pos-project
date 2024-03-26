import React from 'react';

const OrderSentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  console.log("Modal isOpen:", isOpen);
  
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <p>Order Sent</p>
        <button className="modal-button" onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default OrderSentModal;