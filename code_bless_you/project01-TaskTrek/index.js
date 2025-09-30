const express = require ('express');// for http requests and responses and routing- return an obj
const app = express();

// todos will be array because i will not use databases yet
const todosArr = [
	{
		id: 1,
		task: "Create all APIs for project 01",
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

app.use (express.json ())

app.get ("/", (req, res) => {
	res.send("Hello from root!");
})

app.get ("/todos", (req, res) =>{
	// res.send (todosArr);
	res.json (todosArr);
	// res.send 
	// -> used for general pupose [plain text , HTML, JSON]
	// res.json()
	// -> automatically converts our data in the JSON format
	// -> it will set header content type to application/json.
	// -> for JSON data res.json is more convenient.
	//! Don't send a Plain text to res.json

});

// For single todo item we should pass id as a parameter
app.get ("/todos/:id", (req, res) => { // this is a route parameter in our api logic
	// we get info about route parameter from req
	let todoId = parseInt(req.params.id); // request parameters like what in the array. //? parse id into int
	// anything passed in url is string and must convert it in the backend
	const todo = todosArr.find((t) =>t.id === todoId)// to find an element in an array , t: is a single todo item
	res.json (todo);
})

app.get ("/todos/:id/:status", (req, res) => {
	res.send (req.query); // will give query obj
})

//? Difference between Rout param and Query param
//* Route
//- pass data which are must required
//		- if we didn't pass route parameters then API will give us error
// must send in url or it will not show what i need
//!		request.params
//* Query 
//- pass data which are additional
//		- if we didn't pass route parameters then API will not give us error
// its fine if not sending like //? /todo/2/status=done
//!		request.query


//? return single todo with its id
//* Route param [Yes]: most required

//? post api

// we will use thunder client vs code extention to test api
// for express we need a translator to convert JSON data into simple JS obj we can't work directly work with JSON data
//! after array we call our middleware inside app.use() => express.json() , before our apis
app.post("/todos", (req, res) => {// same endpoint but with different methonds, and it will called depends on the frontend request
	const todo = req.body; // body has all data which frontend sends with the request => our todo obj
	//! Long way to validate data
	if (!todo.task)
		return res.status (400).json ({message: "Task is required!"}); // When return: the rest of the code will not run
	if (!todo.tags)
		return res.status (400).json ({message: "Tags are required!"}); // When return: the rest of the code will not run
	if (!todo.status)
		return res.status (400).json ({message: "Status is required!"}); // When return: the rest of the code will not run
	
	
	//! We have a libraries for validate data [Joi, Yup, Validator.js]: Now i will use Joi
	//* 200
	//		all ok
	//* 201
	//		created successfully
	//* 400
	//		bad request done by frontend: missing or invalid or unauthorised access request
	//* 404
	//		not found
	//* 500
	//		Internal server error
	const newTodo = {
			id: todosArr[todosArr.length - 1].id + 1, // get the last todo id and + 1
			task: todo.task,
			tags: todo.tags,
			status: todo.status 
		}
	todosArr.push(newTodo); // add the data
	res.status(201).json(newTodo); // must send new data at the end of each api
	// send the request again in thunder client
});
//? What if someone doesn't send all data
// * must add data validation at the beginning of our API, we will check if passing all require data


app.put ('/todos/:id', (req, res)=>{
	const id = parseInt(req.params.id);
	const {task, tags, status} = req.body;// instead of writing //! const task = req.body.task ...etc
	const todoIndex = todosArr.findIndex((t)=> t.id === id); // if not found it will return -1.
	if (todoIndex === -1)
		return res.status(404).json ({message: "Todo not found!"});
	if (task)
		todosArr[todoIndex].task = task;
	if (tags)
		todosArr[todoIndex].tags = tags;
	if (status)
		todosArr[todoIndex].status = status;
	res.json (todosArr[todoIndex])
})


app.delete ("/todos/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const todoIndex = todosArr.findIndex((t) => t.id === id);
	if (todoIndex === -1)
		return res.status(404).json ({message: `Todo ${id} not found!`});
	todosArr.splice(todoIndex, 1);
	res.json ({message: "Todo Successfully Deleted!"});
});

// the port must set a condition 
let PORT = process.env.PORT || 3001; // process.env.PORT is for heroku or any other hosting platform
// env is environment variable set by the hosting platform
// if process.env.PORT is not set, it will use 3001
// I set capital letters for PORT to know it is an environment variable

// listen to our server
app.listen (PORT, () => {
	console.log (`Server is running on port: ${PORT}`);
});

//? To not restart server again and again, we can use nodemon
// npm install -g nodemon
// nodemon index.js instead of node index.js
// nodemon will watch for changes in the file and restart the server automatically
// -g is for global installation

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
