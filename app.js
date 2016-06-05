
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
    
    console.log(req.body);
    console.log(req.file);
    
    var size = req.file.size;
    
    res.send("File Size: " + size + " bytes");
    
});



app.listen(port);
console.log("The server is listening on port: " + port);