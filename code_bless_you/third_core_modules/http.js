// to create http server and handle http requests
// if frontend want to access our backend
const http = require ('http');
// When someone sends request to our server this callback function will run
// the function will send a response to the request
// we will have the info about request in req object
// we will have the info about response in res object
const server = http.createServer ((req, res) => { // return our server obj
	res.write ('Hello World!'); // this will be the response
	res.end; // the response will end here
})

server.listen (3000) // pass the port on which we want to start this server [any port not in use]
// usually [3000 or 5000]
// we can bass another callback function