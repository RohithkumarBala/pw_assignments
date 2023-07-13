function capitalizeName(name) {
    var firstLetter = name[0];
    var capitalizedFirstLetter = firstLetter.toLowerCase() !== firstLetter ? firstLetter : firstLetter.toUpperCase();
    var modifiedName = capitalizedFirstLetter + name.slice(1);
  
    return modifiedName;
  }
  
  // Example usage
  var userName = "john";
  var modifiedName = capitalizeName(userName);
  console.log("Modified name:", modifiedName);
  