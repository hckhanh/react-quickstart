var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

app.use('/', express.static('.'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function () {
	console.log('Listening on: http://localhost:3000');
});