console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');

Javascript is an asynchronous language, and uses an event loop to handle asynchronous calls 
