import React from "react";
import menuSettings from "../data/menudata.json";
import MenuHeader from "./MenuHeader";
import AlaCarteButton from "./AlaCarteButton";
import UpsellPrompts from "./UpsellPrompts";
import ButtonRegular from "./ButtonRegular";
import MainMenuShortcuts from "./MainMenuShortcuts";
import DoneButton from "./DoneButton";
import snsBackground from "../images/SnSMenuBack.bmp"; 

function MenuContainer({
  setActiveMenu,
  activeMenu,
  addToCheck,
  completeSandwichMods,
  completeSandwichOrder,
  handleAlaCarteClick,
  addModification,
  handleSidePrompt,
}) {
  const divStyle = {
    width: "100%", // Adjust the width as needed
    height: "645px", // Adjust the height as needed
    backgroundImage: `url(${snsBackground})`,
    //backgroundSize: "cover", // Cover the entire div
    backgroundPosition: 'center center', 
    backgroundRepeat: 'no-repeat',
    backgroundSize: "585px 620px" // Center the background image
  };
  const renderAlaCarteButton =
    activeMenu === "MainMenu" || activeMenu === "SteakburgerMenu" ? (
      <AlaCarteButton
        activeMenu={activeMenu}
        onClick={() => handleAlaCarteClick()}
      />
    ) : null;

  // const menuGridClassName =
  //   activeMenu === "SandwichModifications"
  //     ? "modifications-button-container"
  //     : "menu-button-container";

  var menuGridClassName = "menu-button-container";

  if(activeMenu === "SandwichModifications"){
    menuGridClassName = "modifications-button-container"
  } else if(activeMenu === "ShakeMenu"){
    menuGridClassName = "menu-button-container four-per-row-container"
  } else{
    menuGridClassName = "menu-button-container"
  }

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
              addToCheck(itemDetails);
            } else {
              addToCheck(itemDetails);
            }
          }}
        />
      );
    });

  return (
    <div className="menu-container">
      <div className="message-menu">Error getting timed message</div>
      <div className="pos-background" style={divStyle}>
        <div className="menu-interface-container">
          <MenuHeader activeMenu={activeMenu} />
          {renderAlaCarteButton}
          <div className={menuGridClassName}>
            {renderMenuItems}
            <DoneButton
              activeMenu={activeMenu}
              completeSandwichMods={completeSandwichMods}
            />
            {/* {renderDoneButton} */}
            {/* {renderSidePromptButtons} */}
            <MainMenuShortcuts
              setActiveMenu={setActiveMenu}
              activeMenu={activeMenu}
              completeSandwichOrder={completeSandwichOrder}
              handleSidePrompt={handleSidePrompt}
            />
            <UpsellPrompts
              activeMenu={activeMenu}
              completeSandwichOrder={completeSandwichOrder}
              handleSidePrompt={handleSidePrompt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuContainer;
