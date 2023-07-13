function correctCartBug(cart) {
    var correctedCart = [];
  
    for (var i = 0; i < cart.length; i++) {
      var quantity = cart[i];
      var correctedQuantity = quantity * 2;
      correctedCart.push(correctedQuantity);
    }
  
    return correctedCart;
  }
  
  // Example usage
  var cart = [1, 2, 3, 4, 5];
  var correctedCart = correctCartBug(cart);
  console.log("Corrected cart:", correctedCart);
  