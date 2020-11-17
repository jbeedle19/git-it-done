// Variables:
var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

// Functions:
var getUserRepos = function(user) {
    // Format the GitHub api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // Make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

var formSubmitHandler = function(event) {
    event.preventDefault();
    
    // Get value from input element
    var username = nameInputEl.value.trim();
    
    if (username) {
        getUserRepos(username);
        nameInputEl.value = "";
    } else {
        alert("Please enter a GitHub username");
    }
}

// Event Listeners:
userFormEl.addEventListener("submit", formSubmitHandler);