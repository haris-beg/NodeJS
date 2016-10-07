/**
 * Created by r625361 on 10/7/2016.
 */
var Profile = require("./profile.js");

// Handle the http route GET / and POST / i.e. home
function home(request, response) {
    // if url = "/" && GET
    if (request.url === "/") {
        // show the search
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write("Header\n");
        response.write("Search\n");
        response.end('Footer\n');
    }
    // if url = "/" and POST
    // redirect to /:username
}

// Handle HTTP route for GET/:username ie, /harisbeg
function user(request, response) {
    // if url = "/..."
    var username = request.url.replace("/", "");
    if (username.length > 0) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write("Header\n");
        // get JSON from treehouse.com
        var studentProfile = new Profile(username);

        // on "end"
        studentProfile.on("end", function (profileJSON) {
            // show profile

            // store the values that we need
            var values = {
                avatarUrl: profileJSON.gravatar_url,
                name: profileJSON.name,
                username: profileJSON.profile_name,
                badges: profileJSON.badges.length,
                javascriptPoints: profileJSON.points.JavaScript
            }
            //simple responsse
            response.write(values.name + " (" + values.username + ") has " + values.badges + " badges" + "\n");
            response.end('Footer\n');
        });

        // on "error"
        studentProfile.on("error", function (error) {
            //show error
            response.write(error.message + "\n");
            response.end('Footer\n');
        });

    }
}

module.exports.home = home;
module.exports.user = user;