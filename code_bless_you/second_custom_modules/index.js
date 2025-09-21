//! const mathOperations =  require ("./mathOperations");

//? obj destructing: so we don't write obj.prop
// const add1 = mathOperations.add;

//? another way
// const {add, sub, bey} = mathOperations;

//? another way when require
const {add, sub, bey} = require ("./mathOperations");
console.log (add (10, 10), sub (10, 10), bey ());

// Exercise
const {currentDate, currentYear} = require ("./logger");
console.log (currentDate(),  currentYear());
