const os = require ('os');

// for diffirent platforms
if (os.platform () === 'win32') // Windows
{
	console.log ("Hello Windows user!")
}
else if (os.platform () === 'darwin') // macOS
{
	console.log ("Hello mac user!")
}
else
	console.log ("Hello user!")

// get the total memory of an os
console.log (os.totalmem ());
// get the free memory
console.log (os.freemem ())