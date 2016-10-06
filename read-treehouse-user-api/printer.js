/**
 * Created by r625361 on 10/6/2016.
 */
//Print out message
function printMessage(username, badgeCount, points) {
    var message = username + ' has ' + badgeCount + ' total badge(s) and ' + points + ' points in JavaScript';
    console.log(message);
}

// Print out error messages
function printError(error) {
    console.error(error.message);
}

module.exports.printMessage = printMessage;
module.exports.printError = printError;