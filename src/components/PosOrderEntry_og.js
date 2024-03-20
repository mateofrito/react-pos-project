import React from "react";
import { useState } from "react";
import MenuNavButtons from "./MenuNavButtons";
import GuestCheck from "./GuestCheck";
import TopNavFunctionButtons from "./TopNavFunctionButtons";
import MenuContainer from "./MenuContainer";

function PosOrderEntry({ onLogout }) {
  const [activeMenu, setActiveMenu] = useState("MainMenu");
  const [checkItems, setCheckItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [orders, setOrders] = useState([]); // Store all submitted orders
  const [nextOrderNumber, setNextOrderNumber] = useState(1); // Start with order number 1
  const [isAlaCarteSelected, setIsAlaCarteSelected] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [currentModifications, setCurrentModifications] = useState([]);
  const [activeItemIndex, setActiveItemIndex] = useState(null); 
  var menuPrice = "";
 

  const handleAlaCarteClick = () => {
    setIsAlaCarteSelected(true);
    console.log("ala carte clicked.");
  };

  const addToCheck = (item) => {
    if (isAlaCarteSelected && item.alaCarteEligible) {
      menuPrice = parseFloat(item.price) - parseFloat(item.alaCarteDiscount);
      addOrderItem({
        ...item,
        checkDisplay: item.alaCarteDisplay,
        price: menuPrice.toFixed(2),
      });
    } else {
      addOrderItem(item);
    }
    if (menuPrice) {
      // Check if price exists and is not an empty string
      setTotal((prevTotal) => prevTotal + parseFloat(menuPrice || 0));
    }
    if (item.modifications === "dtToppings") {
      setActiveMenu("SandwichModifications");
    } else {
      setActiveMenu(activeMenu);
    }
    setIsAlaCarteSelected(false);
  };

  const addOrderItem = (item) => {
    setCheckItems((prevItems) => [...prevItems, item]);
  };

  const sendOrder = () => {
    // Create a new order object
    const newOrder = {
      orderNumber: nextOrderNumber,
      items: [...checkItems],
      total: total,
    };

    console.log("Order sent:", newOrder);
    setOrders((prevOrders) => [...prevOrders, newOrder]);
    setCheckItems([]);
    setTotal(0);
    setNextOrderNumber((prevOrderNumber) => prevOrderNumber + 1); // Increment order number
  };

  const completeMods = () => {
    setActiveMenu("MainMenu");
  };

  

  const onItemSelected = (index) => {
    setSelectedItemIndex(index);
  };

 

  const handleDuplicateItem = () => {
    if (selectedItemIndex !== null) {
      setCheckItems(currentItems => {
        const itemToDuplicate = { ...currentItems[selectedItemIndex] };
        const newItems = [...currentItems, itemToDuplicate]; // Add duplicated item
        return newItems;
      });
      // Update total to include duplicated item's price
      setTotal(prevTotal => prevTotal + parseFloat(checkItems[selectedItemIndex].price));
      // Optionally deselect item after duplication
      setSelectedItemIndex(null);
    }
  };

  return (
    <div class="pos-container">
      <TopNavFunctionButtons sendOrder={sendOrder} onLogout={onLogout} onDuplicate={handleDuplicateItem} />

      <div className="main-content">
        <GuestCheck checkItems={checkItems} total={total} onItemSelected={onItemSelected} selectedItemIndex={selectedItemIndex}  />

        <MenuContainer
          activeMenu={activeMenu}
          addToCheck={addToCheck}
          completeMods={completeMods}
          handleAlaCarteClick={handleAlaCarteClick}
        />

        <MenuNavButtons setActiveMenu={setActiveMenu} />
      </div>
    </div>
  );
}

export default PosOrderEntry;
