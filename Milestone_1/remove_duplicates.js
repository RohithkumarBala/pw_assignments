function removeDuplicates(cart) {
    var uniqueCart = [];
  
    for (var i = 0; i < cart.length; i++) {
      if (!uniqueCart.includes(cart[i])) {
        uniqueCart.push(cart[i]);
      }
    }
  
    return uniqueCart;
  }
  
  // Example usage
  var customerCart = ['item1', 'item2', 'item3', 'item2', 'item4', 'item1'];
  var uniqueItems = removeDuplicates(customerCart);
  console.log("Unique items:", uniqueItems);
  