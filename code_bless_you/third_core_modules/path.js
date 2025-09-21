// const path = require ('node:path');
const path = require ('path');

// see info about specific file
// console.log(path.parse (__filename).base)

// This is how i can get the path of something from the current directory
const profilePath = path.join (__dirname, "uploads")
console.log (profilePath);