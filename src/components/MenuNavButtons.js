import React from 'react';

function MenuNavButtons({ setActiveMenu }) {
  return (
    <div className="menu-nav-buttons">
      <button className="menu-nav-button" onClick={() => setActiveMenu("MainMenu")}>Main Menu</button>
      <button className="menu-nav-button" onClick={() => setActiveMenu("Breakfast")}>Breakfast</button>
      <button className="menu-nav-button" onClick={() => setActiveMenu("SteakburgerMenu")}>Steakburgers</button>
      <button className="menu-nav-button" onClick={() => setActiveMenu("SpecialitiesMenu")}>Specialities</button>
      <button className="menu-nav-button" onClick={() => setActiveMenu("ShakeMenu")}>Shakes</button>
      <button className="menu-nav-button" onClick={() => setActiveMenu("ChiliMenu")}>Chili</button>
      <button className="menu-nav-button" onClick={() => setActiveMenu("DrinkMenu")}>Drinks</button>
      <button className="menu-nav-button" onClick={() => setActiveMenu("SidesMenu")}>Sides/Salads</button>
      <button className="menu-nav-button" onClick={() => setActiveMenu("Desserts")}>Desserts</button>
      <button className="menu-nav-button" onClick={() => setActiveMenu("KidsMenu")}>Kids Menu</button>
      <button className="menu-nav-button" onClick={() => setActiveMenu("DriveThruMenu")}>Combos</button>
    </div>
  );
}

export default MenuNavButtons;