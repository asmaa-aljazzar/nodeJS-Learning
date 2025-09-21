//! first method to exports many things
// let counter = function(arr){
// 	return 'There are ' + arr.length + ' Elements in this array'
// };
// let adder = function (a, b)
// {
// 	// We can embed vars in `` without conctinate
// 	return `The sum of the 2 numbers is ${a + b}`;
// };
// var pi = 3.142;
// module.exports is an empty object : we must add proprty like .counter or .adder
//* module.exports.counter = counter;
//* module.exports.adder = adder;
//* module.exports.pi = pi;

//! or we can pass wit exoports word while initialize the function
// module.exports.counter = function(arr){
// 	return 'There are ' + arr.length + ' Elements in this array'
// };
// module.exports.adder = function (a, b)
// {
// 	// We can embed vars in `` without conctinate
// 	return `The sum of the 2 numbers is ${a + b}`;
// };
// module.exports.pi = 3.142;

//! or we can pass them to an object 
let counter = function(arr){
	return 'There are ' + arr.length + ' Elements in this array'
};
let adder = function (a, b)
{
	// We can embed vars in `` without conctinate
	return `The sum of the 2 numbers is ${a + b}`;
};
var pi = 3.142;
module.exports = {
	counter: counter,
	adder: adder,
	pi: pi
}