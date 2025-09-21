let names = require ("./names"); /// names file
let events = require ("events"); // event core module - for custom events
let util = require ("util"); // util core module - for inherits function
let sipling = names.sipling; // the sipling array from names.js
let Person = function (name){ // the Person constructor need name proprty
	this.name = name; // this name is the name passed.
}
util.inherits(Person, events.EventEmitter); // all will inherit events.
let persons = sipling.map((name) => new Person(name)); //  
persons.forEach((person)=>{
	person.on ('born', ()=>{
		console.log (`Lets calibrate " ${person.name} " was borned!!`);
	});
});

persons.forEach((person)=>{
	person.emit ('born');
});

