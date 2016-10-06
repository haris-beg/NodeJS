/**
 * Created by r625361 on 10/5/2016.
 */
var profile = require("./profile");
var users = ["chalkers", "harisbeg"];

users.forEach(function (username) {
    profile.get(username);
})

