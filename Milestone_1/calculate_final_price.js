const calculateTotalCost = (cart) => {
    return cart.reduce((total, item) => {
      return total + (item.unitPrice * item.quantity);
    }, 0);
  };
  
  // Example usage
  const customerCart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 5, quantity: 4 },
    { unitPrice: 8, quantity: 3 }
  ];
  
  const totalCost = calculateTotalCost(customerCart);
  console.log("Total Cost:", totalCost);
  