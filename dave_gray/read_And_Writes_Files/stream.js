// to not read the file as a one block: like gnl
const fs = require ('fs');

// read stream
const rs = fs.createReadStream ('./files/lorem.txt', {encoding: 'utf8'});
// write stream
const ws = fs.createWriteStream ('./files/new-lorem.txt');

// each write after each read
// data 'event' from nodeJS
// rs.on ('data', (dataChunk) => {
//     ws.write (dataChunk);
// });

rs.pipe(ws);// more efficient
// rs.pipe(ws) is a concise and efficient way to copy data from a ReadStream to a WriteStream.
// It automatically takes each chunk from rs and writes it to ws.
// Handles 'end' (finish reading) and 'error' events automatically.
// More efficient and cleaner than using rs.on('data', ...) especially for large files.
