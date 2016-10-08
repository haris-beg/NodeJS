/**
 * Created by r625361 on 10/7/2016.
 */
var fs = require('fs');

function view(templateName, values, response) {
    //Read from template file
    var fileContents = fs.readFileSync('./views/' + templateName + '.html');
    //if (error) throw error;

    //Insert values into the content

    //Write out to the response
    response.write(fileContents);
}

module.exports.view = view;