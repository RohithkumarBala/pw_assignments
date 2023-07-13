function calculator(num1, num2, operator) {
    var result;
  
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        console.log("Invalid operator");
        return; // Exit the function if the operator is invalid
    }
  
    console.log("Result:", result);
  }
  
  // Example usage
  calculator(5, 2, "+"); // Result: 7
  calculator(10, 4, "-"); // Result: 6
  calculator(3, 6, "*"); // Result: 18
  calculator(8, 2, "/"); // Result: 4
  calculator(5, 2, "%"); // Invalid operator
  