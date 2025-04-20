const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

function onStart() {
    console.log('Start event detected. Application is starting...');
}

function onStop() {
    console.log('Stop event detected. Application is stopping...');
}

eventEmitter.on('start', onStart);
eventEmitter.on('stop', onStop);

function mainLoop() {
    console.log('Main loop running. Waiting for events...\n');

    setTimeout(() => eventEmitter.emit('start'), 1000);
    setTimeout(() => eventEmitter.emit('stop'), 3000);
}

mainLoop();
