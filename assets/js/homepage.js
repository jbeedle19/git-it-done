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

getUserRepos("microsoft");
getUserRepos("jbeedle19");
getUserRepos("facebook");