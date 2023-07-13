function calculateBill(costs, numPeople) {
    var totalBill = costs.reduce((acc, curr) => acc + curr, 0);
    var billPerPerson = totalBill / numPeople;
  
    var billSplit = {
      totalBill: totalBill,
      billPerPerson: billPerPerson
    };
  
    return billSplit;
  }
  
  // Example usage
  var dishCosts = [20, 30, 15, 25, 10]; // Cost of each dish
  var numberOfPeople = 4; // Number of people sharing the bill
  
  var bill = calculateBill(dishCosts, numberOfPeople);
  console.log("Total Bill:", bill.totalBill);
  console.log("Bill per Person:", bill.billPerPerson);
  