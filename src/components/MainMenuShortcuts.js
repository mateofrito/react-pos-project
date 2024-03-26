import React from 'react';
import ButtonRegular from './ButtonRegular';


const MainMenuShortcuts = ({ activeMenu, completeSandwichOrder, handleSidePrompt }) => {
  if (activeMenu !== "MainMenu") return null;

  return (
    <>
      <ButtonRegular
        key="franks"
        label1="Franks and"
        label2="Footlongs" // Combining label1 and label2 for display""
        style={{
          gridColumnStart: 1,
          gridRowStart: 5,
          backgroundColor: "Blue",
          color: "Yellow",
          height: 100
        }}
        onClick={() => {
            /* Action 1 */
          }}
      />
      <ButtonRegular
        key="valueMeal"
        label1="Value"
        label2="Meal" // Combining label1 and label2 for display""
        style={{
          gridColumnStart: 1,
          gridRowStart: 7,
          backgroundColor: "Green",
          color: "White",
          width: 240
        }}
        onClick={() => {
            /* Action 1 */
          }}
      />
      

      
    </>
  );
};

export default MainMenuShortcuts;