import React from "react";


function GuestCheck({ checkItems, total, selectedItemIndex, onItemSelected }) {
  return (
    <div className="panel-container">
    <div className="check-display-panel">
      <div className="check-contents">
        <div className="check-header">
          <span className="order-type-text">Guest Check</span>
        </div>
        {checkItems.map((item, index) => (
          <div
            key={index}
            className={`check-item ${
              index === selectedItemIndex ? "selected" : ""
            }`}
            onClick={() => onItemSelected(index)}
          >
            <div className={`check-item-text ${item.isModifier? 'modification' : ''}`}>{item.price !== "" ? "1" : ""}</div>
            <div className={`check-item-text ${item.isModifier ? 'modification-indent' : ''}`}>{item.checkDisplay}</div>
            <div className={`check-item-text price-column ${item.isModifier ? 'modification' : ''}`}>{item.price && item.price !== "" ? `$${item.price}` : ""}</div>
          </div>
        ))}
      </div>
      <div className="check-total">Total      {total.toFixed(2)}</div>
      
    </div>
    <div className="button-column">
    
    <button className="side-button">Btn 1</button>
    <button className="side-button">Btn 1</button>
  </div>
    </div>
  );
}

export default GuestCheck;
