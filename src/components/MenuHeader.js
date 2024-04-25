import React from "react";

function MenuHeader({ activeMenu }) {
    const menuHeaders = {
      MainMenu: "Main Menu",
      DriveThruMenu: "Specials/Promo Menu",
      ShakeMenu: "The Fountain",
      SteakburgerMenu: "Steakburgers",
      ChiliMenu: "Chili Menu",
      SidesMenu: "Sides",
      SandwichModifications: "Toppings/Modifications",
      Steakfranks: "Franks and Footlongs",
      AddASidesMenu: "Sides",
      SidePrompt: "Press Done for fries or if they would like a different side press Substitute",
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