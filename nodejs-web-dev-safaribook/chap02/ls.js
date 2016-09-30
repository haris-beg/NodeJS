var fs = require('fs');
// The readdirSync function is a close analogue to the Unix
// readdir system call and is used to list the files in a directory.
var files = fs.readdirSync('.');
for (fn in files) {
  console.log(files[fn]);
}
