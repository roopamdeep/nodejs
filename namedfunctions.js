console.log("Before");
//CALLBACK HELL   SOLUTION: NAMED FUNCTIONS
getUser(1, getRepositories);


function getRepositories(user){
    console.log("callback returned me a value", user);
    getRepositories(user.githubusername, getCommits );
}
function getCommits(repos) {
    console.log("fetched the repo list for this username ", repos);
    getCommits(user,displayCommits);
}
function displayCommits(commits)  {
    console.log("the commits are", commits);
  }
    


console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    callback({ id: id, githubusername: "mosh" });
  }, 2000);
}
function getRepositories(username, callback) {
  console.log("fetch");
  callback(["repo1", "repo2", "repo3"]);
}
function getCommits(username, callback) {
  console.log("commits");
  callback([1, 2, 3]);
}
