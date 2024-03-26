import React from 'react';
import ButtonRegular from './ButtonRegular';


const UpsellPrompts = ({ activeMenu, completeSandwichOrder, handleSidePrompt }) => {
  if (activeMenu !== "SidePrompt") return null;

  return (
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
        }}
        onClick={completeSandwichOrder}
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
        }}
        onClick={handleSidePrompt}
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
        }}
        onClick={handleSidePrompt}
      />
    </>
  );
};

export default UpsellPrompts;