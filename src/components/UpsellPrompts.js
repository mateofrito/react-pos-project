import React from 'react';
import ButtonRegular from './ButtonRegular';


const UpsellPrompts = ({ activeMenu, completeSandwichOrder, handleSidePrompt }) => {
  if (activeMenu !== "SidePrompt") return null;

  return (
    <>
      <ButtonRegular
        key="Done-sidePrompt"
        label1="With Fries Done"
        label2="" // Combining label1 and label2 for display""
        style={{
          gridColumnStart: 2,
          gridRowStart: 3,
          backgroundColor: "#9f0000",
          color: "white",
        }}
        onClick={completeSandwichOrder}
      />
      <ButtonRegular
        key="SubSide"
        label1="Upgrade Fries or"
        label2="Sub Side" // Combining label1 and label2 for display""
        style={{
          gridColumnStart: 2,
          gridRowStart: 4,
          backgroundColor: "Blue",
          color: "white",
        }}
        onClick={handleSidePrompt}
      />
    </>
  );
};

export default UpsellPrompts;