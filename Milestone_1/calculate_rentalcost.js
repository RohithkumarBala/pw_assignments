function calculateRentalCost(numDays, carType) {
    var rentalCost;
  
    switch (carType) {
      case "Economy":
        rentalCost = 4000;
        break;
      case "Midsize":
        rentalCost = 15000;
        break;
      case "Luxury":
        rentalCost = 25000;
        break;
      default:
        rentalCost = 0;
        break;
    }
  
    var totalCost = rentalCost * numDays;
    return totalCost;
  }
  
  // Example usage
  var daysRented = 7;
  var carType = "Economy";
  var totalRentalCost = calculateRentalCost(daysRented, carType);
  console.log("Total Rental Cost:", totalRentalCost);
  