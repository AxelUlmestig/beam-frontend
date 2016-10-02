var express = require('express');

var app = express();
app.use(express.static(__dirname + '/'));
app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
        res.render('index.html');
});

app.listen(1337, 'localhost', function() {
        console.log("server starting");
});
