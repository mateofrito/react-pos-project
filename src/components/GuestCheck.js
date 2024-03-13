import React from "react";

function GuestCheck({ checkItems, total}) {
    return (
      <div className="check-display-panel">
        <div className="check-contents">
          {checkItems.map((item, index) => (
            <div key={index} className="check-item">
              <div>{item.price !== "" ? "1" : ""}</div>
              <div>{item.checkDisplay}</div>
              <div>{item.price && item.price !== "" ? `$${item.price}` : ""}</div>
            </div>
          ))}
        </div>
        <div className="check-total">{total.toFixed(2)}</div>
        
      </div>
    );
  }
  
  export default GuestCheck;

  