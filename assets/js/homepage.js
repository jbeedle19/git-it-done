// Variables:
var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
var repoContainerEl = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");

// Functions:
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

var getUserRepos = function(user) {
    // Format the GitHub api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // Make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            displayRepos(data, user);
        });
    });
};

var displayRepos = function(repos, searchTerm) {
    console.log(repos);
    console.log(searchTerm);
};


// Event Listeners:
userFormEl.addEventListener("submit", formSubmitHandler);