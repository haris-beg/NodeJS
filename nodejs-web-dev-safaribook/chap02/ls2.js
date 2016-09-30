var fs = require('fs');
var dir = '.';
if (process.argv[2]) dir = process.argv[2];
console.log("argv[0] = " + process.argv[0]);
console.log("argv[1] = " + process.argv[1]);
console.log("argv[2] = " + process.argv[2]);
var files = fs.readdirSync(dir);
for (fn in files) {
  console.log(files[fn]);
}
