/**
 * Created by r625361 on 10/5/2016.
 */
var profile = require("./profile");
//Usage: node app harisbeg chalkers davemcfarland ...
var users = process.argv.slice(2);
users.forEach(profile.get);

