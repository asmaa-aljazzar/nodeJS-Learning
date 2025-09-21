function add (a, b)
{
	return a + b;
}

function sub (a, b)
{
	return a - b;
}

//? we can export anything we want
//! First way
module.exports.add = add;
module.exports.sub = sub;
//! Second way
module.exports = {
	add, //this mean add: add
	sub,
	bey:() => {
		return "bey";
	}
}

//! Third way
module.exports.hello = function hello()
{
	return "hello";
}


