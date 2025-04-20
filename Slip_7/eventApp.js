const events = require('events');

const eventEmitter = new events.EventEmitter();

const greetUser = () => {
  console.log("Hello! Event triggered successfully.");
};

eventEmitter.on('greet', greetUser);

setTimeout(() => {
  eventEmitter.emit('greet');
}, 2000);
