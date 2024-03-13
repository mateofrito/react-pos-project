import React from 'react';

function MenuNavButtons({ setActiveMenu }) {
  return (
    <div className="menu-nav-buttons">
      <button className="menu-nav-button" onClick={() => setActiveMenu("MainMenu")}>Main Menu</button>
      <button className="menu-nav-button" onClick={() => setActiveMenu("DriveThruMenu")}>Drive-Thru</button>
      <button className="menu-nav-button" onClick={() => setActiveMenu("ShakeMenu")}>Shake Menu</button>
      <button className="menu-nav-button" onClick={() => setActiveMenu("SteakburgerMenu")}>Steakburgers</button>
      <button className="menu-nav-button" onClick={() => setActiveMenu("SpecialitiesMenu")}>Specialities</button>
      <button className="menu-nav-button" onClick={() => setActiveMenu("ChiliMenu")}>Chili</button>
      <button className="menu-nav-button" onClick={() => setActiveMenu("SidesMenu")}>Sides</button>
    </div>
  );
}

export default MenuNavButtons;