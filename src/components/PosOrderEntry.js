import React, { useState } from "react";
import MenuNavButtons from "./MenuNavButtons";
import GuestCheck from "./GuestCheck";
import TopNavFunctionButtons from "./TopNavFunctionButtons";
import MenuContainer from "./MenuContainer";
import ConfirmationModal from "./ConfirmationModal";
import { useOrderManagement } from "../hooks/useOrderManagement";

function PosOrderEntry({ onLogout }) {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sendOrderEnabled, setSendOrderEnabled] = useState(false);
  const {
    activeMenu,
    setActiveMenu,
    checkItems,
    total,
    setTotal,
    addToCheck,
    setCheckItems,
    setOrders,
    nextOrderNumber,
    setNextOrderNumber,
    selectedItemIndex,
    completeSandwichMods,
    completeSandwichOrder,
    handleAlaCarteClick,
    handleSidePrompt,
    handleDuplicateItem,
    addModification,
    onItemSelected,
    canSendOrder
  } = useOrderManagement();
  
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

 
  return (
    <div className="pos-container">
      <TopNavFunctionButtons
        sendOrder={sendOrder}
        onLogout={onLogout}
        onDuplicate={handleDuplicateItem}
        canSendOrder={canSendOrder}
      />

      <div className="main-content">
        <GuestCheck
          checkItems={checkItems}
          total={total}
          onItemSelected={onItemSelected}
          selectedItemIndex={selectedItemIndex}
        />

        <MenuContainer
          setActiveMenu={setActiveMenu}
          activeMenu={activeMenu}
          addToCheck={addToCheck}
          completeSandwichMods={completeSandwichMods}
          completeSandwichOrder={completeSandwichOrder}
          handleAlaCarteClick={handleAlaCarteClick}
          addModification={addModification}
          handleSidePrompt={handleSidePrompt}
        />

        <MenuNavButtons setActiveMenu={setActiveMenu} />
        {isModalOpen && <ConfirmationModal isOpen={isModalOpen} onClose={handleCloseModal} modalText={"Order Sent."}/>}
      </div>
    </div>
  );
}

export default PosOrderEntry;
