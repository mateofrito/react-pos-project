import React from "react";

function ButtonRegular({ label1, label2, style, onClick, activeMenu }) {
  var buttonClassName ="pos-button";
    if (activeMenu === "SandwichModifications") {
      buttonClassName = "pos-modifications-button";
    } else if(activeMenu === "ShakeMenu"){
      buttonClassName ="pos-button four-per-row";
    }
    else 
    {
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