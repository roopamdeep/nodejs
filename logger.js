var url = 'www.logger.io/in';

function log(message){
    //send http request
    console.log(message);
}

exports.logger = log;