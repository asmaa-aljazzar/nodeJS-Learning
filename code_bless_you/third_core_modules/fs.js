const fs = require ('fs');

//? Synchronous method
const data = fs.readdirSync ('./');

//? Asynchronous method
// the callback function will execute after asynchronous work will complete
// the function will take error and data, if we get data then the error is null and the opposite 
// if path not exist it will give an error
fs.readdir ('./not', (error, data) => {
	if (error)
		console.log(error);
	else
		console.log (data);
});
// console.log (data)