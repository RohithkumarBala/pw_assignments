function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  // Example usage
  var celsiusTemperature = 25;
  var fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
  console.log("Temperature in Fahrenheit:", fahrenheitTemperature);
  