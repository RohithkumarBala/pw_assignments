function printInvertedTriangle(i) {
    for (var row = i; row >= 1; row--) {
      var pattern = '';
  
      for (var j = 1; j <= row; j++) {
        pattern += '*';
      }
  
      console.log(pattern);
    }
  }
  
  // Example usage
  var rows = 6;
  printInvertedTriangle(rows);
  