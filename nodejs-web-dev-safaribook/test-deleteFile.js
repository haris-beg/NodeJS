const fs = require('fs');
const assert = require('assert');
const df = require('./deleteFile');
df.deleteFile("no-such-file", (err) => {
    assert.throws(
        function() {
          if (err) {
            console.log("Test Passed");
            throw err;
          }
        },
        function(error) {
            if ((error instanceof Error)
             && /does not exist/.test(error)) {
               console.log("Test Passed");
               return true;
            } else return false;
        },
        "unexpected error"
    );
});
