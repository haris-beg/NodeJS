var bcrypt = require('bcryptjs');

var unsecurePlainTextPassword = "password";

bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(unsecurePlainTextPassword, salt, function(err, hash) {
        console.log("hashed password = " + hash);
    });
});
