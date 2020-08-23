console.log("Before");

getUser(1,(user)=>{
  console.log("callback returned me a value", user);
  getRepos(user.githubusername,(repos)=>{
    console.log("fetched the repo list for this username ",repos);
    getCommits(user,(commits)=>{
      console.log("the commits are" , commits);
    })
  })
});

console.log("After");

function getUser(id,callback) {
  setTimeout(() => {
    callback({ id: id, githubusername: "mosh" });
  }, 2000);
}
function getRepos(username, callback){
  console.log("fetch");
  callback(['repo1','repo2','repo3']);

}
function getCommits(username, callback){
  console.log("commits");
  callback([1,2,3]);

}
