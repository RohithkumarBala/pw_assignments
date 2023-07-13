const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    const roundedPercentage = Math.round(discountPercentage * 100) / 100;
    return roundedPercentage;
  };
  
  // Example usage
  const originalPrice = 100;
  const discountedPrice = 70;
  
  const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
  console.log("Discount Percentage:", discountPercentage + "%");
  