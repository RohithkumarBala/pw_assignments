function fetchUserData(username) {
    var url = "https://api.github.com/users/" + username;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.message === "Not Found") {
          displayErrorMessage("User not found");
        } else {
          displayUserData(data);
        }
      })
      .catch(error => {
        displayErrorMessage("An error occurred");
        console.error(error);
      });
  }
  
  function displayUserData(user) {
    var avatar = document.getElementById("avatar");
    var name = document.getElementById("name");
  
    avatar.src = user.avatar_url;
    name.textContent = user.name || user.login;
  }
  
  function displayErrorMessage(message) {
    var name = document.getElementById("name");
    name.textContent = message;
    var avatar = document.getElementById("avatar");
    avatar.src = "";
  }
  
  var searchButton = document.getElementById("search-btn");
  searchButton.addEventListener("click", function() {
    var usernameInput = document.getElementById("username");
    var username = usernameInput.value.trim();
  
    if (username !== "") {
      fetchUserData(username);
    }
  });
  