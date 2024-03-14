import React from "react";

function MenuHeader({ activeMenu }) {
    const menuHeaders = {
      MainMenu: "Main Menu",
      DriveThruMenu: "Specials/Promo Menu",
      ShakeMenu: "Shake Menu",
      SteakburgerMenu: "Steakburgers",
      ChiliMenu: "Chili Menu",
      SidesMenu: "Sides",
      SandwichModifications: "Toppings/Modifications",
      // Add more menus as needed
      default: "", // Default case
    };
    const headerValue = menuHeaders[activeMenu] || menuHeaders.default;
    return (
      <div>
        <span className="menu-title">{headerValue}</span>
      </div>
    );
  }

  export default MenuHeader;