
var express = require('express');
var port    = process.env.PORT;
var fs      = require('fs');
var multer  = require('multer');
var path    = require('path');

var app     = express();

var router  = express.Router();
var upload =  multer({ dest: 'uploads/'});


app.use(express.static(__dirname + '/client'));
 
// Homepage route:
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});

app.post('/upload', upload.single('files'), function(req, res) {

    console.log("Upload successful, here are the file details:");
    console.log(req.file);
    
    var name = req.file.originalname;
    var size = req.file.size + " bytes";
    
    var info = new Object();
    
    info["File Name"] = name;
    info["File Size"] = size;
    
    res.send(info);
    
    
});



app.listen(port);
console.log("The server is listening on port: " + port);