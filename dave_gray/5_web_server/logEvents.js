// to use import we set type to module in package.json: ES
const { format } = require('date-fns'); // to print date and time
const { v4: uuid } = require('uuid'); // to print a uuid
const fsPromises = require('fs/promises'); // file/folders operations
const path = require('path'); // to combine 2 pathes

/**
 * logEvents - Emits a log event with a timestamped message.
 *
 * Notes:
 * 1. `dateTime` is generated using `format(new Date(), ...)` to ensure consistent date-time formatting.
 * 2. Direct assignment (const logTime = dateTime) is sufficient; wrapping it in a template literal (`${dateTime}`)
 *    has no effect when it's a single string, only needed when combining with other strings.
 * 3. When emitting the event, it's best to combine timestamp and message in one template literal for clarity:
 *       `[${dateTime}] ${message}`
 * 4. This approach keeps the log message compact, readable, and easily extendable (e.g., adding log levels or IDs).
 * 5. Avoid unnecessary template literals for single strings—they add no value and are slightly less efficient.
 */
exports.logEvents = async (message) => { // async function that will use in index.js
	const dateTime = `${format(new Date(), 'yyyy-MM-dd\t HH:mm:ss')}`; // to concatinate with custom message
	const logItem = `${dateTime}\t ${uuid()}\t${message}`; // the concatinate
	console.log(logItem);
	//! Don't forget: await always inside try-catch
	try {
		const dir = path.join(__dirname, 'logs'); // the new directory
		//*recursive: true
		/**
		 * Node will create the folder if it doesn’t exist.

		* Node will create any missing parent directories along the path.

		* If the folder already exists, it does not throw an error.
		 */
		await fsPromises.mkdir(dir, { recursive: true }); // create the new directory
		await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem + '\n'); // append data
		//? another way
		// const dir = path.join(__dirname, 'logs'); // or 'join' if you want
		// if (!fs.existsSync(dir)) {
		// 	fs.mkdirSync(dir, { recursive: true });
		// }

	} catch (err) {
		console.log(err);
	}
}

