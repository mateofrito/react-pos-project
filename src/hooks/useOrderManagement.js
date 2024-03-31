import {useState, userCalback} from 'react';

export const useOrderManagement = () => {
    const [activeMenu, setActiveMenu] = useState("MainMenu");
    const [isAlaCarteSelected, setIsAlaCarteSelected] = useState(false);
    const [activeItemIndex, setActiveItemIndex] = useState(null);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    //var menuPrice = "";
    const [checkItems, setCheckItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [orders, setOrders] = useState([]); // Store all submitted orders
    const [nextOrderNumber, setNextOrderNumber] = useState(1); // Start with order number 1
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);
    const [currentModifications, setCurrentModifications] = useState([]);
    const [isModifying, setIsModifying] = useState(false);

    const canSendOrder = checkItems.length > 0 && !isModifying && activeMenu === 'MainMenu';

  const addToCheck = (item) => {
    let menuPrice = parseFloat(item.price);
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
      setIsModifying(true);
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
      setIsModifying(false);
      setCurrentModifications([]); // Reset for next item
      setActiveItemIndex(null); // Reset active item index
    }
    setActiveMenu("SidePrompt"); // Only here should we return to the MainMenu
  };

  const handleSidePrompt = () => {
    console.log(activeItemIndex);
    if (activeItemIndex !== null) {
      setIsModifying(true);
      setCheckItems((prevItems) =>
        prevItems.map((item, index) =>
          index === activeItemIndex
            ? { ...item, modifications: currentModifications }
            : item
        )
      );
      setIsModifying(false);
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
      setIsModifying(false);
      setCurrentModifications([]); // Reset for next item
      setActiveItemIndex(null); // Reset active item index
    }
    setIsModifying(false);
    console.log(isModifying);
    setActiveMenu("MainMenu"); // Only here should we return to the MainMenu
  };
 

  const handleAlaCarteClick = () => {
    setIsAlaCarteSelected(true);
    console.log("ala carte clicked.");
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
        let menuPrice = itemToDuplicate.price;
        const newItems = [...currentItems, itemToDuplicate];
        console.log(menuPrice);
        setTotal((prevTotal) => prevTotal + parseFloat(menuPrice || 0));
        setSelectedItemIndex(null); // Optionally reset selection
        return newItems;
      });
    }
  };

return{
    activeMenu,
    setActiveMenu,
    checkItems,
    total,
    setTotal,
    addToCheck,
    addOrderItem,
    isAlaCarteSelected,
    setIsAlaCarteSelected,
    setActiveItemIndex,
    activeItemIndex,
    setCheckItems,
    orders,
    setOrders,
    nextOrderNumber,
    setNextOrderNumber,
    selectedItemIndex,
    setSelectedItemIndex,
    currentModifications,
    setCurrentModifications,
    completeSandwichMods,
    completeSandwichOrder,
    handleAlaCarteClick,
    handleSidePrompt,
    handleDuplicateItem,
    addModification,
    onItemSelected,
    canSendOrder 


}

};














