// to create http server and handle http requests
// if frontend want to access our backend
const http = require ('http');
// When someone sends request to our server this callback function will run
// the function will send a response to the request
// we will have the info about request in req object
// we will have the info about response in res object
const server = http.createServer ((req, res) => { // return our server obj
	if (req.url === '/')// root rout
		res.write ('Hello World!'); // this will be the response
	else if (req.url === '/about')
		res.write ("this is about route")
	else
		res.write ("rout not found");
	res.end(); // the response will end here
})

server.listen (3001, () => {
	console.log ("Server Start Listening On Port 3001");
}) // pass the port on which we want to start this server [any port not in use]
// usually [3000 or 5000]
// we can bass another callback function that will run when our server starts successfully
// to send request go to browser and write " localhost:3000 "

// should handle routs : we need info for which route user sends request
// req obj

//? In real world we don't use this http method because it is too messy
// instead we use //! Express.ja
// to divide our routes in different files