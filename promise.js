console.log("Before");
//CALLBACK HELL   SOLUTION: NAMED FUNCTIONS
// getUser(1, getRepositories);

// function getRepositories(user) {
//   console.log("callback returned me a value", user);
//   getRepositories(user.githubusername, getCommits);
// }
// function getCommits(repos) {
//   console.log("fetched the repo list for this username ", repos);
//   getCommits(user, displayCommits);
// }
// function displayCommits(commits) {
//   console.log("the commits are", commits);
// }

console.log("After");

getUser(1)
  .then((user) => getRepositories(user.githubusername))
  .then((repos) => getCommits(repos))
  .then((commits) => console.log(commits))
  .catch(err=> console.log('error', err.message));

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, githubusername: "mosh" });
    }, 2000);
  });
}
function getRepositories(username) {
  return new Promise((resolve, reject) => {
    console.log("fetch");
    resolve(["repo1", "repo2", "repo3"]);
  });
}
function getCommits(username) {
  return new Promise((resolve, reject) => {
    console.log("commits");
    resolve([1, 2, 3]);
  });
}
