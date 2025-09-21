const express = require ('express');// for http requests and responses and routing- return an obj
const app = express();

// todos will be array because i will not use databases yet
const todosArr = [
	{
		id: 1,
		tast: "Create all APIs for project 01",
		tags: ["NodeJS", "JavaScript"],
		status: "todo"
	},
	{
		id: 2,
		tast: "Create API for list of todos",
		tags: ["NodeJS", "JavaScript"],
		status: "doing"
	},
	{
		id: 3,
		tast: "plan project 01",
		tags: ["NodeJS", "JavaScript"],
		status: "done"
	}

]

app.get ("/", (req, res) => {
	
	res.send("Hello from root!");
})

app.get ("/todos", (req, res) =>{
	res.send (todosArr);
});

let port = 3001;
app.listen (port, () => {
	console.log ("Server is running on port:", port + "...");
})

//! --------------------------------------------------------------------------------------------------
// const express = require ('express'); // return a function
// const app = express(); // return an obj

// //? http method for creating different types of API
// // app.get();
// // app.post();
// // app.put();
// // app.patch();
// // app.delete();

// app.get ('/', (req, res) => { // home/root
// 	res.send ("TaskTrek Project!"); // In plain Nodejs it res.write
// });

// let port = 3001;
// // listen to our server
// app.listen (port, () => {
// 	console.log ("Server is listening on this port:", port)
// });


// app.get('/todos') // ? 1st param: api endpoint name => define get API for URL http://localhost:3000/todos
// endpoint is todos
