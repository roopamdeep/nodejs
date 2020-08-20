const os =  require('os');

var freemem = os.freemem();
var totalmem = os.totalmem();

console.log(freemem);
console.log(totalmem);

//template string ES6
console.log(`Totsl Memory: ${totalmem}`);
