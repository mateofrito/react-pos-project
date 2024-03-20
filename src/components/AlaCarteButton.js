import React from "react";

function AlaCarteButton({ activeMenu, onClick }) {
  return (
    <button className="pos-button-wide" onClick={onClick}>
      A la Carte
    </button>
  );
}

export default AlaCarteButton;
