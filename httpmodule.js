const http = require('http');

const server = http.createServer((req,res) => {

 if(req.url == '/'){
     res.write("hi welcome to home page");
     res.end();
     
 }
 else if(req.url == '/api/courses'){
     res.write(JSON.stringify([1,2,3]));
     res.end();
 }
 else{
     res.end("Invalid Page");
    // res.end();
 }

});
server.listen(2000);
console.log('listening on port 2000')