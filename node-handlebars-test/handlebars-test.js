var express = require('express');
var handlebars = require('express-handlebars').create({
	defaultLayout : 'main'
});

var app = express();

app.engine('handlebars', handlebars.engine);

app.set('port', process.env.PORT || 8080);
app.set('view engine', 'handlebars');

app.listen(app.get('port'), function() {
	console.log('Node-handlebars test started on http://localhost:'	+ app.get('port'));
});

app.get(['/','/form'], function(req, res) {
	res.render('form');
});
app.get('/fibonacci', function(req, res) {
	res.render('fibonacci');
});
app.get('/search', function(req, res) {
	res.render('search');
});

app.use(express.static(__dirname + '/public'));