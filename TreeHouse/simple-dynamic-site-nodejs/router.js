/**
 * Created by r625361 on 10/7/2016.
 */
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
        response.write(username + "\n");
        response.end('Footer\n');

        // get JSON from treehouse.com
        // on "end"
        // show profile
        // on "error"
        //show error
    }
}

module.exports.home = home;
module.exports.user = user;