//sometimes we want to create a promise that is already resolved/rejected. especially when doing unit testing

const p = Promise.reject(new Error('Reason for rejection')); //native error object that includes callstack
p.catch(err => console.log(err))