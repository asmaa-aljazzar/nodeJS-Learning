function currentDate ()
{
	// cant use Date as a name of the variable.
	let date = new Date().toTimeString();
	return date;
}

function currentYear ()
{
	
	return new Date().getFullYear();
}

module.exports = {
	currentDate,
	currentYear
}