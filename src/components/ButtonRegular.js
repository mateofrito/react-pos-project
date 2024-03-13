import React from "react";

function ButtonRegular({ label1, label2, style, onClick, activeMenu }) {
    if (activeMenu === "SandwichModifications") {
      var buttonClassName = "pos-modifications-button";
    } else {
      buttonClassName = "pos-button";
    }
    return (
      <button className={buttonClassName} style={style} onClick={onClick}>
        <span>{label1}</span>
        <span>{label2}</span>
      </button>
    );
  }

  export default ButtonRegular;