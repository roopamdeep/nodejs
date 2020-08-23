console.log("Before");
console.log("After");

// getUser(1)
//   .then((user) => getRepositories(user.githubusername))
//   .then((repos) => getCommits(repos))
//   .then((commits) => console.log(commits))
//   .catch(err=> console.log('error', err.message));
async function displayCommits() {
try{

const user = await getUser(1);
const repos = await getRepositories(user.githubusername);
const commits = await getCommits(repos);
console.log(commits);
}
catch(err){
  console.log(err.message)
}
}
displayCommits();



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
    reject(new Error('could not fetch repos'))
  });
}
function getCommits(username) {
  return new Promise((resolve, reject) => {
    console.log("commits");
    resolve([1, 2, 3]);
  });
}
