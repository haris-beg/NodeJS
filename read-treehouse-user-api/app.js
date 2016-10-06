/**
 * Created by r625361 on 10/5/2016.
 */
//Problem: We need a simple way to look at a user's badge count and JavaScript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
var https = require('https');
var username = "harisbeg";

function printMessage(username, badgeCount, points) {
    var message = username + ' has ' + badgeCount + ' total badge(s) and ' + points + ' points in JavaScript';
    console.log(message);
}

//Connect to the API URL (http://teamtreehouse.com/username.json)
var request = https.get("https://teamtreehouse.com/" + username + ".json", function (response) {
    //console.dir(response);
    //console.log(response.statusCode);
    var body = "";
    //Read the data
    response.on('data', function (chunk) {
        body += chunk;
        //console.log('Response Body : ' + chunk);
    });
    response.on('end', function () {
        console.log(body);
        console.log(typeof body);
    });
});
//Parse the data
//Print the data

request.on("error", function (error) {
    console.error(error.message);
});
