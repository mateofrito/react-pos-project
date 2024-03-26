import React from "react";
import menuSettings from "../data/menudata.json";
import MenuHeader from "./MenuHeader";
import AlaCarteButton from "./AlaCarteButton";
import UpsellPrompts from "./UpsellPrompts";
import ButtonRegular from "./ButtonRegular";
import MainMenuShortcuts from "./MainMenuShortcuts";
import DoneButton from "./DoneButton";


function MenuContainer({ activeMenu, addToCheck, completeSandwichMods, completeSandwichOrder, handleAlaCarteClick, addModification, handleSidePrompt }) {

  const renderAlaCarteButton =
    activeMenu === "MainMenu" || activeMenu === "SteakburgerMenu" ? (
      <AlaCarteButton activeMenu={activeMenu} onClick={() => handleAlaCarteClick()} />
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
          onClick={() => {
            // Here's the conditional behavior based on the menu
            if (activeMenu === "SandwichModifications") {
              // Assuming itemDetails or another identifier is used for modifications
              addModification(itemDetails.checkDisplay); 
              addToCheck(itemDetails)
            } else {
              addToCheck(itemDetails);
            }
          }}
        /> 
      ); 
    });

   

  return (
    <div className="menu-container">
       <div className="message-menu">
        Error getting timed message
      </div>
      <MenuHeader activeMenu={activeMenu} />
      {renderAlaCarteButton}
      <div className={menuGridClassName}>
        {renderMenuItems}
        <DoneButton activeMenu={activeMenu} completeSandwichMods={completeSandwichMods}/>
        {/* {renderDoneButton} */}
        {/* {renderSidePromptButtons} */}
        <MainMenuShortcuts activeMenu={activeMenu} completeSandwichOrder={completeSandwichOrder} handleSidePrompt={handleSidePrompt}/>
        <UpsellPrompts activeMenu={activeMenu} completeSandwichOrder={completeSandwichOrder} handleSidePrompt={handleSidePrompt}/>
      </div>
      
      
    </div>
  );
}

export default MenuContainer;
