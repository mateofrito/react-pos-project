import React, { useState } from "react";
import MenuNavButtons from "./MenuNavButtons";
import GuestCheck from "./GuestCheck";
import TopNavFunctionButtons from "./TopNavFunctionButtons";
import MenuContainer from "./MenuContainer";
import OrderSentModal from "./OrderSentModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        modifications: [],
        checkDisplay: item.alaCarteDisplay,
        price: menuPrice.toFixed(2),
      });
    } else {
      addOrderItem({
        ...item,
        modifications: [],
        checkDisplay: item.checkDisplay,
        price: item.price,
      });
    }
    if (menuPrice) {
      // Check if price exists and is not an empty string
      setTotal((prevTotal) => prevTotal + parseFloat(menuPrice || 0));
    }
    if (item.modifications === "dtToppings") {
      const newItemIndex = checkItems.length; // Assuming the item is added to the end
      setActiveItemIndex(newItemIndex);
      setActiveMenu("SandwichModifications");
    } else {
      setActiveMenu(activeMenu);
    }
    setIsAlaCarteSelected(false);
  };

  const addOrderItem = (item) => {
    setCheckItems((prevItems) => [...prevItems, item]);
  };

  const completeSandwichMods = () => {
    console.log(activeItemIndex);
    if (activeItemIndex !== null) {
      setCheckItems((prevItems) =>
        prevItems.map((item, index) =>
          index === activeItemIndex
            ? { ...item, modifications: currentModifications }
            : item
        )
      );
      setCurrentModifications([]); // Reset for next item
      setActiveItemIndex(null); // Reset active item index
    }
    setActiveMenu("SidePrompt"); // Only here should we return to the MainMenu
  };

  const handleSidePrompt = () => {
    console.log(activeItemIndex);
    if (activeItemIndex !== null) {
      setCheckItems((prevItems) =>
        prevItems.map((item, index) =>
          index === activeItemIndex
            ? { ...item, modifications: currentModifications }
            : item
        )
      );
      setCurrentModifications([]); // Reset for next item
      setActiveItemIndex(null); // Reset active item index
    }
    setActiveMenu("AddSidesMenu"); // Only here should we return to the MainMenu
  };

  const completeSandwichOrder = () => {
    console.log(activeItemIndex);
    if (activeItemIndex !== null) {
      setCheckItems((prevItems) =>
        prevItems.map((item, index) =>
          index === activeItemIndex
            ? { ...item, modifications: currentModifications }
            : item
        )
      );
      setCurrentModifications([]); // Reset for next item
      setActiveItemIndex(null); // Reset active item index
    }
    setActiveMenu("MainMenu"); // Only here should we return to the MainMenu
  };
  const sendOrder = () => {
    // Filter checkItems to include only those items where isModifier is false
    const itemsToIncludeInOrder = checkItems.filter((item) => !item.isModifier);
    const newOrder = {
      orderNumber: nextOrderNumber,
      items: itemsToIncludeInOrder,
      total: total, // Consider recalculating total if necessary
    };

    
    setIsModalOpen(true); 
 
    console.log("Order sent:", newOrder);
    setOrders((prevOrders) => [...prevOrders, newOrder]);
    setCheckItems([]);
    setTotal(0);
    setNextOrderNumber((prevOrderNumber) => prevOrderNumber + 1);
    //onLogout(); // Increment order number
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    onLogout(); // Close the modal
  }; 

  const addModification = (modification) => {
    setCurrentModifications((prev) => [...prev, modification]);
  };

  const onItemSelected = (index) => {
    setSelectedItemIndex(index);
  };

  const handleDuplicateItem = () => {
    if (selectedItemIndex !== null) {
      setCheckItems((currentItems) => {
        const itemToDuplicate = { ...currentItems[selectedItemIndex] };
        // Ensure a deep clone if modifications are complex
        menuPrice = itemToDuplicate.price;
        const newItems = [...currentItems, itemToDuplicate];
        console.log(menuPrice);
        setTotal((prevTotal) => prevTotal + parseFloat(menuPrice || 0));
        setSelectedItemIndex(null); // Optionally reset selection
        return newItems;
      });
    }
  };

  return (
    <div className="pos-container">
      <TopNavFunctionButtons
        sendOrder={sendOrder}
        onLogout={onLogout}
        onDuplicate={handleDuplicateItem}
      />

      <div className="main-content">
        <GuestCheck
          checkItems={checkItems}
          total={total}
          onItemSelected={onItemSelected}
          selectedItemIndex={selectedItemIndex}
        />

        <MenuContainer
          activeMenu={activeMenu}
          addToCheck={addToCheck}
          completeSandwichMods={completeSandwichMods}
          completeSandwichOrder={completeSandwichOrder}
          handleAlaCarteClick={handleAlaCarteClick}
          addModification={addModification}
          handleSidePrompt={handleSidePrompt}
        />

        <MenuNavButtons setActiveMenu={setActiveMenu} />
        {isModalOpen && <OrderSentModal isOpen={isModalOpen} onClose={handleCloseModal} />}
      </div>
    </div>
  );
}

export default PosOrderEntry;
