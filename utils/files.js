var fs = require('fs');
var md5 = require('md5');
module.exports = {
    getFilename : function(fullPath) {
        return fullPath.replace(/^.*[\\\/]/, '');
    },
    base64_encode: function(file) {
        var bitmap = fs.readFileSync(file);
        return new Buffer(bitmap).toString('base64');
    },
    listFiles : function(path, callback) {
        var files = [];
        fs.readdir(path, function(err, files) {
            if (err) {
                if (err.errno === process.ENOENT) {
                    // Ignore file not found errors and return an empty result
                    callback(null, "");
                } else {
                    callback(err);
                }
            } else {
                var hashedFiles = [];
                files.forEach(function(file) {
                    hashedFiles.push({hash:md5(file), name:file});
                });

                callback(null, hashedFiles);

            }
        });
    },
    writeSync: function(path, data) {
        fs.writeFileSync(path, data, 'binary');
    }
};
