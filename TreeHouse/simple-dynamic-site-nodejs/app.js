/**
 * Created by r625361 on 10/6/2016.
 */
//Problem: We need a simple way to look at a user's badge account and JS point from a web browser
//Solution: use node js to perform the profile lookups and serve our templates via http

// 1. Create a web server

// 2. Handle the http route GET / and POST / i.e. home
    // if url = "/" && GET
        // show the search
    // if url = "/" and POST
        // redirect to /:username

// 3. Handle HTTP route for GET/:username ie, /harisbeg
    // if url = "/..."
        // get JSON from treehouse.com
            // on "end"
                // show profile
            // on "error"
                //show error

// 4. A function that handles the reading of files and merge in values
    // read from template file and get a string
        // merge values into string