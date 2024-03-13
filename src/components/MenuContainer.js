import React from "react";
import menuSettings from "../Data/menudata.json";
import MenuHeader from "./MenuHeader";
import AlaCarteButton from "./AlaCarteButton";
import ButtonRegular from "./ButtonRegular";

function MenuContainer({ activeMenu, addToCheck, completeMods }) {
//   const handleButtonClick = (item) => {
//     console.log(`Clicked on: ${item.checkDisplay}`);
//     // Placeholder for future implementation
//   };

  const renderAlaCarteButton =
    activeMenu === "MainMenu" || activeMenu === "SteakburgerMenu" ? (
      <AlaCarteButton activeMenu={activeMenu} />
    ) : null;

  const renderDoneButton =
    activeMenu === "SandwichModifications" ? (
      <ButtonRegular
        key="Done"
        label1="Done"
        label2="" // Combining label1 and label2 for display""
        style={{
          gridColumnStart: 5,
          gridRowStart: 6,
          backgroundColor: "purple",
          color: "white",
          // Additional styles here
        }}
        activeMenu={activeMenu}
        onClick={() => completeMods()}
      />
    ) : null;

  const menuGridClassName =
    activeMenu === "SandwichModifications"
      ? "modifications-button-container"
      : "menu-button-container";

  // Dynamically generate menu items based on the current menu
  const renderMenuItems = Object.entries(menuSettings.MenuItems)
    .filter(([_, itemDetails]) => itemDetails.Menus[activeMenu])
    .map(([itemName, itemDetails]) => {
      const { label1, label2, buttonColor, textColor, id } = itemDetails;
      const position = itemDetails.Menus[activeMenu]; // Extract positioning for the current menu

      return (
        <ButtonRegular
          key={id}
          label1={label1}
          label2={label2} // Combining label1 and label2 for display
          style={{
            gridColumnStart: position.gridColumnStart,
            gridRowStart: position.gridRowStart,
            backgroundColor: buttonColor,
            color: textColor,
            // Additional styles here
          }}
          activeMenu={activeMenu}
          onClick={() => addToCheck(itemDetails)}
        />
      );
    });

  return (
    <div className="menu-container">
      <MenuHeader activeMenu={activeMenu} />
      {renderAlaCarteButton}
      <div className={menuGridClassName}>
        {renderMenuItems}
        {renderDoneButton}
      </div>
    </div>
  );
}

export default MenuContainer;
