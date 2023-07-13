function countVowels(name) {
    var vowelCount = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (var i = 0; i < name.length; i++) {
      var character = name[i].toLowerCase();
  
      if (vowels.includes(character)) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  // Example usage
  var name = "John Doe";
  var numVowels = countVowels(name);
  console.log("Number of vowels:", numVowels);
  