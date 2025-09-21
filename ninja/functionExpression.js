// normal function statement
function callFunction (fun){//? here the function will use as an argument variable
	fun();
}// but this function have a name because we don't need it as a variable.
// and the normal function can used before has been declared

// function expression
let sayBay = function(){ //* So we will save it as a variable
	console.log("bye");
};// this function can't be used before decleration
// we can call it by set varName()

callFunction(sayBay); // no parantheses when it is an argument
