function printDivisibleBy3NotBy2(numbers) {
    for (var i = 0; i < numbers.length; i++) {
      var num = numbers[i];
  
      if (num % 3 !== 0 || num % 2 === 0) {
        continue;
      }
  
      console.log(num);
    }
  }
  
  // Example usage
  var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  printDivisibleBy3NotBy2(numberArray);
  