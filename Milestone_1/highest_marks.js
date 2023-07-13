function findHighestMarks(marks) {
    var highestMarks = marks[0]; // Assume the first student has the highest marks initially
  
    for (var i = 1; i < marks.length; i++) {
      highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
    }
  
    return highestMarks;
  }
  
  // Example usage
  var marks = [85, 92, 78, 95, 88];
  var highestMarks = findHighestMarks(marks);
  console.log("Highest marks:", highestMarks);
  