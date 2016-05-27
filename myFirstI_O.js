// module for file system api
var fs = require('fs');

var readFileBuffer = fs.readFileSync(process.argv[2]);
var str = readFileBuffer.toString();
var lines = str.split('\n');

console.log(lines.length - 1);