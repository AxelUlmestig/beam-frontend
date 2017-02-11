const express = require('express');

const app = express();
app.use(express.static(__dirname + '/../../'));
app.set('views', __dirname + '/../../');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => res.render('src/web/index.html'));

app.listen(1337, () => console.log("server starting"));
