const fs = require('fs');
const path = require('path');

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), "utf8", (err, data) => {
//     if (err) throw err;
//     // throw err;: sends the error up to Node.js’s error system.
//     // If you don’t have a surrounding try/catch 
//     // or error handler, Node will crash and print the error to the console.
//     // console.log (data); //! will get a buffer data if no utf8 param like:
//     // <Buffer 48 65 6c 6c 6f 20 65 76 65 72 79 6f 6e 65 21 0d 0a 6d 79 20 6e 61 6d 65 20 69 73 20 61 73 6d 61 61 20 61 6c 6a 61 7a 7a 61 72 0d 0a 69 20 77 61 6e 74 ... 71 more bytes>
//     // console.log (data.toString());//! use if there is no utf8 param
//     console.log(data);
// });

//todo -----------------------------------------------------------------------------------

// In asynch we don't know which done first but when call them inside call-back function 
//  - we controll the order
// it will create the file if does not exist
// ! Call back hell
// fs.writeFile(path.join(__dirname, 'files', 'asma.txt'), 'Nice to meet you', (err) => {
//     if (err) throw err;
//     console.log('Write Complete!');

    // Add more content
    // it will create the file if does not exist
    // in this scope mean append after create if not exist
//     fs.appendFile(path.join(__dirname, 'files', 'asma.txt'), '\nI am asmaa\n', (err) => {
//         if (err) throw err;
//         console.log('Write Complete!');
//         fs.rename(path.join(__dirname, 'files', 'asma.txt'), path.join (__dirname, 'files', 'newReplay.txt'), (err) => {
//             if (err) throw err;
//             console.log('Rename Complete!');
//         });
//     });
// });

//todo -----------------------------------------------------------------------------------

//! This must get an error
// fs.readFile ('hello', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log (data);
// });

//todo -----------------------------------------------------------------------------------

//? if we run this after error it will display before it
// console.log ('Hello....');

//todo -----------------------------------------------------------------------------------

//? 1. Synchronous:
//    Each operation waits for the previous one to finish.
//    If the first operation fails, the next ones will not run.

//? 2. Asynchronous without await: 
//    Operations start immediately in the background.
//    They don’t wait for each other; each runs independently.
//    An error in one does not affect the others.
//    Useful when operations do not depend on each other’s results.

//? 3. Asynchronous with async/await:
//    Each operation waits for the previous one to complete.
//    Useful when the next operation depends on the previous result.
//    The overall program does not stop; only the async function waits.
//    Ensures correct order while keeping non-blocking behavior.

const fsPromises = require ('fs').promises; // attach promises with fs
const fileOps = async () => {
    try {
        //1. Read the data from starter.txt.
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        //2. Delete 'unlink' starter.txt file
        await fsPromises.unlink (path.join(__dirname, 'files', 'starter.txt'));
        console.log (data);
        //3. Write the data in a new file.
        await fsPromises.writeFile (path.join(__dirname, 'files', 'promiseWrite.txt'), `\n\n${data}`);
        //4. Append more data in that file.
        await fsPromises.appendFile (path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you.');
        //5. Rename the file. 
        await fsPromises.rename (path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
        //6. Read the data from the new file. 
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8');
        console.log (newData);

    } catch (err){
        console.error(err);
    }
}

fileOps ();

//? Exit on uncaught errors
// process.on('uncaughtException', …):
// Listens for errors that were thrown 
// but not caught by try/catch or callback error handling.
// By default, Node just prints the stack trace and exits.
// With this, you decide how to react.
process.on('uncaughtException', err => {
    console.error(`There was and uncaught error: ${err}`);
    process.exit(1); // exit the application
})