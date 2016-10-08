/**
 * Created by r625361 on 10/7/2016.
 */
var Profile = require("./profile.js");
var renderer = require("./renderer");

var commonHeaders = {'Content-Type': 'text/html'};

// Handle the http route GET / and POST / i.e. home
function home(request, response) {
    // if url = "/" && GET
    if (request.url === "/") {
        // show the search
        response.writeHead(200, commonHeaders);
        renderer.view("header", {}, response);
        renderer.view("search", {}, response);
        renderer.view("footer", {}, response);
        response.end();
    }
    // if url = "/" and POST
    // redirect to /:username
}

// Handle HTTP route for GET/:username ie, /harisbeg
function user(request, response) {
    // if url = "/..."
    var username = request.url.replace("/", "");
    if (username.length > 0) {
        response.writeHead(200, commonHeaders);
        renderer.view("header", {}, response);
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
            //simple response
            renderer.view("profile", values, response);
            renderer.view("footer",{}, response);
            response.end();
        });

        // on "error"
        studentProfile.on("error", function (error) {
            //show error
            renderer.view("error", {errorMessage: error.message}, response);
            renderer.view("search", {}, response);
            renderer.view("footer",{}, response);
            response.end();
        });

    }
}

module.exports.home = home;
module.exports.user = user;