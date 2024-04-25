import React from "react";
import guestCheck from "../images/guestCheck.bmp";

function GuestCheck({ checkItems, total, selectedItemIndex, onItemSelected }) {
  const divStyle = {
    width: "100%", // Adjust the width as needed
    height: "650px", // Adjust the height as needed
    backgroundImage: `url(${guestCheck})`,
    //backgroundSize: "cover", // Cover the entire div
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "349px 650px", // Center the background image
  };

  return (
    <div className="panel-container">
      <div className="check-display-panel">
        <div className="check-contents" style={divStyle}>
          <div className="check-header">
            <span className="order-type-text"></span>
          </div>
          <div className="order-contents">
            {checkItems.map((item, index) => (
              <div
                key={index}
                className={`check-item ${
                  index === selectedItemIndex ? "selected" : ""
                }`}
                onClick={() => onItemSelected(index)}
              >
                <div
                  className={`check-item-text ${
                    item.isModifier ? "modification" : ""
                  }`}
                >
                  {item.price !== "" ? "1" : ""}
                </div>
                <div
                  className={`check-item-text ${
                    item.isModifier ? "modification-indent" : ""
                  }`}
                >
                  {item.checkDisplay}
                </div>
                <div
                  className={`check-item-text price-column ${
                    item.isModifier ? "modification" : ""
                  }`}
                >
                  {item.price && item.price !== "" ? `$${item.price}` : ""}
                </div>
              </div>
            ))}
          </div>
          <div className="check-total">
            <div className="check-total-text">Total</div>
            <div className="check-total-amount">{total.toFixed(2)}</div>{" "}
          </div>
        </div>
      </div>
      <div className="button-column">
        <button className="side-button">Btn 1</button>
        <button className="side-button">Btn 1</button>
      </div>
    </div>
  );
}

export default GuestCheck;
