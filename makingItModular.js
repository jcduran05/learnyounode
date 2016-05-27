var mymodule = require('./sampleModule.js');

mymodule(process.argv[2], process.argv[3], function(err, files) {
    if (err) console.log(err);
    files.forEach(function(file) {
        console.log(file);
    })
});