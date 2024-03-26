import React from "react";
import menuSettings from "../data/menudata.json";
import MenuHeader from "./MenuHeader";
import AlaCarteButton from "./AlaCarteButton";
import ButtonRegular from "./ButtonRegular";
import DoneButton from "./DoneButton";


function MenuContainer({ activeMenu, addToCheck, completeSandwichMods, completeSandwichOrder, handleAlaCarteClick, addModification, handleSidePrompt }) {

  const renderAlaCarteButton =
    activeMenu === "MainMenu" || activeMenu === "SteakburgerMenu" ? (
      <AlaCarteButton activeMenu={activeMenu} onClick={() => handleAlaCarteClick()} />
    ) : null;

   
    const renderSidePromptButtons =
    activeMenu === "SidePrompt" ? (
      <>
      <ButtonRegular
        key="Done-sidePrompt"
        label1="Done"
        label2="" // Combining label1 and label2 for display""
        style={{
          gridColumnStart: 2,
          gridRowStart: 3,
          backgroundColor: "Red",
          color: "white",
          // Additional styles here
        }}
        activeMenu={activeMenu}
        onClick={completeSandwichOrder }
      />
      <ButtonRegular
        key="SubSide"
        label1="Substitute"
        label2="A Side" // Combining label1 and label2 for display""
        style={{
          gridColumnStart: 2,
          gridRowStart: 4,
          backgroundColor: "Blue",
          color: "white",
          // Additional styles here
        }}
        activeMenu={activeMenu}
        onClick={() => handleSidePrompt()}
      />
      <ButtonRegular
        key="addside-prompt"
        label1="Add A"
        label2="Side" // Combining label1 and label2 for display""
        style={{
          gridColumnStart: 2,
          gridRowStart: 5,
          backgroundColor: "purple",
          color: "white",
          // Additional styles here
        }}
        activeMenu={activeMenu}
        onClick={() => handleSidePrompt()}
      />
      </>
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
        {renderSidePromptButtons}
      </div>
      
      
    </div>
  );
}

export default MenuContainer;
