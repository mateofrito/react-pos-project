import React from 'react';
import ButtonRegular from './ButtonRegular';

const getStyle = (activeMenu) => {
    switch (activeMenu) {
      case "SandwichModifications":
        return {
          gridColumnStart: 5,
          gridRowStart: 11,
          backgroundColor: "red",
          color: "yellow",
        };
      case "AddSidesMenu":
        return {
          gridColumnStart: 2 ,
          gridRowStart: 6,
          backgroundColor: "blue",
          color: "white",
        };
      default:
        return null; // Default case can return null or a default style object
    }
  };
  
  const DoneButton = ({ activeMenu, completeSandwichMods }) => {
    const style = getStyle(activeMenu);
  
    if (!style) return null;
  
    return (
      <ButtonRegular
        key="Done"
        label1="Done"
        label2=""
        style={style}
        onClick={completeSandwichMods}
      />
    );
  };
export default DoneButton;