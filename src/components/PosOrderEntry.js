import React from "react";
import { useState } from "react";
import MenuNavButtons from "./MenuNavButtons";
import GuestCheck from "./GuestCheck";
import TopNavFunctionButtons from "./TopNavFunctionButtons";
import MenuContainer from "./MenuContainer";

function PosOrderEntry({onLogout}){
    const [activeMenu, setActiveMenu] = useState("MainMenu");
    const [checkItems, setCheckItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [orders, setOrders] = useState([]); // Store all submitted orders
    const [nextOrderNumber, setNextOrderNumber] = useState(1); // Start with order number 1
  
    const addToCheck = (item) => {
      setCheckItems((prevItems) => [...prevItems, item]);
      if (item.price) {
        // Check if price exists and is not an empty string
        setTotal((prevTotal) => prevTotal + parseFloat(item.price || 0));
      }
      if (item.modifications === "dtToppings") {
        setActiveMenu("SandwichModifications");
      } else {
        setActiveMenu(activeMenu);
      }
    };
  
    const sendOrder = () => {
      // Create a new order object
      const newOrder = {
        orderNumber: nextOrderNumber,
        items: [...checkItems],
        total: total,
      };
  
      console.log("Order sent:", newOrder);
      // Add the new order to the orders array
      setOrders((prevOrders) => [...prevOrders, newOrder]);
  
      // Clear the current order and prepare for the next order
      setCheckItems([]);
      setTotal(0);
      setNextOrderNumber((prevOrderNumber) => prevOrderNumber + 1); // Increment order number
    };
  
    const completeMods = () => {
      setActiveMenu("MainMenu");
    };
  
    return (
      <div class="pos-container">
        <TopNavFunctionButtons sendOrder={sendOrder} onLogout={onLogout} />
  
        <div className="main-content">
          <GuestCheck checkItems={checkItems} total={total} />
         
          <MenuContainer
            activeMenu={activeMenu}
            addToCheck={addToCheck}
            completeMods={completeMods}
          />
  
          <MenuNavButtons setActiveMenu={setActiveMenu} />
        </div>
      </div>
    );
  }

  export default PosOrderEntry;