const { logEvents } = require ('./logEvents.js');
const EventEmitter = require ('events');

class MyEmitter extends EventEmitter {}; // Define a class

// Initialize obj
MyEmitter = new MyEmitter ();

// Add listener for the log event
MyEmitter.on ('log', (msg) => logEvents (msg));
// log will use in emit function as the name of the event
// log event will work when the event is log
// it will take the message from emit function and pass it to logEvent function
setTimeout (() => {
	// Emit event
	MyEmitter.emit ('log', 'log event emitted!');
}, 2000);// Delay for 2sec