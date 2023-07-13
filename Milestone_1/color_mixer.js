function colorMixer(color1, color2) {
    var result;
  
    switch (color1) {
      case "red":
        switch (color2) {
          case "blue":
            result = "purple";
            break;
          case "yellow":
            result = "orange";
            break;
          default:
            result = "Invalid color combination";
            break;
        }
        break;
  
      case "blue":
        switch (color2) {
          case "red":
            result = "purple";
            break;
          case "yellow":
            result = "green";
            break;
          default:
            result = "Invalid color combination";
            break;
        }
        break;
  
      case "yellow":
        switch (color2) {
          case "red":
            result = "orange";
            break;
          case "blue":
            result = "green";
            break;
          default:
            result = "Invalid color combination";
            break;
        }
        break;
  
      default:
        result = "Invalid color combination";
        break;
    }
  
    console.log("Result:", result);
  }
  
  // Example usage
  colorMixer("red", "blue"); // Result: purple
  colorMixer("blue", "red"); // Result: purple
  colorMixer("red", "yellow"); // Result: orange
  colorMixer("yellow", "red"); // Result: orange
  colorMixer("blue", "yellow"); // Result: green
  colorMixer("yellow", "blue"); // Result: green
  colorMixer("red", "green"); // Result: Invalid color combination
  