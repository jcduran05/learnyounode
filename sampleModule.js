var fs = require('fs');
module.exports = function (dirname, extension, callback) {
    var reg = new RegExp("\." + extension);
    var list = [];

    fs.readdir(dirname, function(err, files) {
        if (err) return callback(err);

        files.forEach(function(file) {
            if (reg.test(file)) {
                list.push(file);
            }
        })

        return callback(null, list);
    });
}