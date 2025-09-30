// directory

const fs = require('fs');

// check if the directory is not exist so we will create it:
if (!fs.existsSync('./new')) {
    // but if it doesn't exist:
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory Created!');
    })
}

// check if the directory is exist so we will delete it:
if (fs.existsSync('./new')) {
    // but if it doesn't exist:
    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory Removed!');
    })
}