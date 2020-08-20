const fs = require('fs');


//synchronous
//var files = fs.readdirSync('./');
//console.log(files);


//asynchronous

var files = fs.readdir('./', function(error, files){
    if(error){
      console.log('Error',error)
    }
    else{
     console.log(files);
    }
})

