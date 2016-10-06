/**
 * Created by r625361 on 10/5/2016.
 */
//Problem: We need a simple way to look at a user's badge count and JavaScript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
var https = require('https');
var http = require('http');
var printer = require('./printer');

function get(username) {
    //Connect to the API URL (http://teamtreehouse.com/username.json)
    var request = https.get("https://teamtreehouse.com/" + username + ".json", function (response) {
        var body = "";
        //Read the data
        response.on('data', function (chunk) {
            body += chunk;
        });
        response.on('end', function () {
            if (response.statusCode === 200) {
                try {
                    //Parse the data
                    var profile = JSON.parse(body);
                    //Print the data
                    printer.printMessage(username, profile.badges.length, profile.points.JavaScript);
                } catch (error) {
                    //Parse error
                    printer.printError(error);
                }
            } else {
                // Status code error
                printer.printError({message: "There was an error getting the profile for " + username +
                ". (" + http.STATUS_CODES[response.statusCode] + ")"});
            }
        });
    });

    //Connection error
    request.on("error", printer.printError);
}

module.exports.get = get;