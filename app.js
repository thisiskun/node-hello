var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('Hello Node!');
}).listen(3000, function() {
    console.log('app listening at port 3000');
});
