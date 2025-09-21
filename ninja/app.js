// // let counter = require ('./count');// i must look at the modern version,
// //  but this is the way we use a function from another file
// // ./count is the file .js contain a specific function
// let stuff = require ('./stuff');// if we need multiple functions from the same file/ module

// //! from count file
// console.log(counter (['asmaa', 'asia', 'osama']));// the real name of the function doesn't matter
//  just use the name of the variable
// // the function here return a value so we can print in the console.

// //! from stuff file
// console.log(stuff.counter (['asmaa', 'asia', 'osama']));// the real name of the function doesn't matter
// console.log (stuff.adder(55, 10));
// console.log (stuff.adder(55, stuff.pi));

//? Node.js have a core modules and we can require them.
//* events module
//use the module name not path
let events = require ('events');// the event emitter return from events
// // We can create a custom events
// let myEmitter = new events.EventEmitter();
// myEmitter.on ('someEvent', function (msg){// we listen out to someEvent by on
// 	console.log (msg);
// });
// myEmitter.emit('someEvent', 'the event was emmitted');// this emitted the event so it will print
// // the event name and the argument needed by it 'msg'


//! Another one (util)
// util : inherit certyain things from obj built on nodeJs
let util = require ('util');
//? arrow function don't have its own this
let Person = function (name){ // want inherit the event emitter
	this.name = name;
};

util.inherits(Person, events.EventEmitter);

let james = new Person("james");
let asma = new Person('asma');
let asia = new Person('asia');
let people = [james, asma, asia];

people.forEach ((person)=>{
	person.on ('speak', (msg)=>{
		console.log (person.name + ' said: ' + msg);
	});
});

james.emit ('speak', 'hey dudes');
asma.emit ('speak', 'fuck you all');
asia.emit ('speak', 'yes i agree');