function validatePassword(password, confirmPassword) {
  if (password === confirmPassword) {
    console.log("Password Matched. Password validation Successful.");
  } else {
    console.log("Password didn't match. Password validation unsuccessful.");
  }
}

// Example usage
validatePassword("password123", "password123"); // Password Matched. Password validation Successful.
validatePassword("password123", "password456"); // Password didn't match. Password validation unsuccessful.


// -------------------------------another way -----------------------------

// function validatePassword() {
//     var password = prompt("Enter password:");
//     var confirmPassword = prompt("Confirm password:");
  
//     if (password === confirmPassword) {
//       console.log("Password Matched. Password validation Successful.");
//     } else {
//       console.log("Password didn't match. Password validation unsuccessful.");
//     }
//   }
  
//   // Call the function to start the password validation
//   validatePassword();
  