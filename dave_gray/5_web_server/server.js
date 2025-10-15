// To build a server we need http
const http = require ('http');
const path = require ('path');
const fs = require ('fs');
const fsPrmises = require ('fs').promises;

const { logEvents } = require ('./logEvents.js');
const EventEmitter = require ('events');
class Emitter extends EventEmitter {}; // Define a class
// Initialize obj
const MyEmitter = new Emitter ();

// use the environment port or 3500.
const PORT = process.env.PORT || 3500;

// Create the server using http module
const server = http.createServer ((req, res) => {
	console.log (req.url, req.method);
});

// can't lunch the server without make it listen to requests.
server.listen (PORT, () => console.log (`Server is running on port ${PORT}`))



// MyEmitter.on ('log', (msg) => logEvents (msg));

// MyEmitter.emit ('log', 'log event emitted!');
