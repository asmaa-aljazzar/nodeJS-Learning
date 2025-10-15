// Todo: split the function & make it write on the report file.

const fsPromises = require("fs").promises;

const ipCount = {
	"127.0.0.1": 5,
	"192.168.1.10": 2,
	"10.0.0.3": 8
}

const endpointCounts = {
	"/api/users": 6,
	"/api/login": 13,
	"/api/products": 2
}

function mostEndpoint(endpointCounts) {
	let mostCommonEndpoint;
	let mostCommonEndpointCount = 0;
	for (key in endpointCounts) {
		if (endpointCounts[key] > mostCommonEndpointCount) {
			mostCommonEndpoint = key;
			mostCommonEndpointCount = endpointCounts[key];
		}
	}
	return {
		"most": mostCommonEndpoint,
		"Count": mostCommonEndpointCount
	}
}

function request_per_ip(ipCount) {

}

const generate_report = (ipCount, endpointCounts) => {
	try {
		console.log('==== Log Report ====\n');

		// let totalUniqId = 0;
		// for (ip in ipCount) totalUniqId++;
		//! more clean way to loop
		//? use Object.keys to count the keys
		let totalUniqId = Object.keys(ipCount).length;

		console.log(`Total unique IP:\t${totalUniqId}`);

		// The function mostEndpoint(endpointCounts) returns an object like:
		// { most: "/api/login", Count: 13 }
		// 
		// Object destructuring allows us to "extract" values from that object into variables in a single line.
		// 
		// Syntax: { propertyName: newVariableName } = object
		// - "most" is the property in the returned object.
		// - "mostCommonEndpoint" is the new variable we create to hold the value of "most".
		// - "Count" is the property in the returned object.
		// - "mostCommonEndpointCount" is the new variable to hold the value of "Count".
		//
		// After this line:
		// mostCommonEndpoint === "/api/login"
		// mostCommonEndpointCount === 13
	 	const {most: mostCommonEndpoint, Count: mostCommonEndpointCount} = mostEndpoint (endpointCounts);

		console.log(`Most common endpoint:\t${mostCommonEndpoint} \(${mostCommonEndpointCount} requests\)\n`);
		console.log(`Request per IP:`);
		for (const key in ipCount)
			console.log(`${key}:\t${ipCount[key]}`);
	} catch (err) {
		console.error(err);
	}

}

generate_report(ipCount, endpointCounts)