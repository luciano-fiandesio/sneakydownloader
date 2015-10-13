var express = require('express');
var router = express.Router();
var wget = require('wget-improved');
var outputDir = '/home/';
var tmpDir = '/tmp/';
var _files = require('../utils/files');
var md5 = require('md5');
var zip = new require('node-zip')();


/* GET home page. */
router.get('/', function(req, res, next) {
    var files = [];
    _files.listFiles(outputDir, function(err, _files) {
        if (err) {
            console.log("ERRRR!");
        } else {
            res.render('index', { files: _files, title: 'Sneaky Downloader' });

        }

    });
});

router.post('/wget', function(reqx, resx) {

    var url = reqx.body.url,
        filename = _files.getFilename(url);
        var download = wget.download(reqx.body.url, outputDir + filename);
        download.on('error', function(err) {
            console.log(" error : "  + err);
        });
        download.on('end', function(output) {
            //console.log(output);
            resx.redirect('/');
        });
});

router.get('/down', function(req, res) {
    var hash = req.query.id;
    _files.listFiles(outputDir, function(err, files) {
        files.forEach(function(file) {
            if (hash === md5(file.name)) {
                zip.file(file.name+'.b64', _files.base64_encode(outputDir+file.name));
                _files.writeSync(tmpDir+file.name+'.zip', zip.generate({base64:false,compression:'DEFLATE'}));
                res.download(tmpDir+file.name+'.zip');
            }

        });
//        res.redirect('/');

    });

});
module.exports = router;
