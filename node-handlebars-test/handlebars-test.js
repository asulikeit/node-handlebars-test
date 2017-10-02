var express = require('express');
var handlebars = require('express-handlebars').create({
	defaultLayout : 'main',
	helpers: {
		section: function(name, options){
			if(!this._sections) this._sections = {};
			this._sections[name] = options.fn(this);
			return null;
		}
	}
});

var app = express();

app.engine('handlebars', handlebars.engine);

app.set('port', process.env.PORT || 8080);
app.set('view engine', 'handlebars');

app.listen(app.get('port'), function() {
	console.log('Node-handlebars test started on http://localhost:'	+ app.get('port'));
});

// view
app.get(['/','/form'], function(req, res) {
	res.render('form');
});
app.get('/fibonacci', function(req, res) {
	res.render('fibonacci');
});
app.get('/search', function(req, res) {
	var keyword = req.param('keyword');
	res.render('search', {keyword : keyword});
});

// static
app.use(express.static(__dirname + '/public'));

// data
app.get('/data/timezone', function(req, res) {
	var date = new Date();
	var offset = date.getTimezoneOffset();
	res.json({
		offset : offset
	});
});

app.get('/data/fibonacci', function(req, res) {
	var n = req.param('number');
	var result;
	if (n < 0 ) {
		result = "";
	} else if (n == 0 || n == 1) {
		result = n;
	} else {
		var i;
		var fn = [];
		fn[0] = 0;
		fn[1] = 1;
		for (i=2; i<=n; i++){
			fn[i] = fn[i-2] + fn[i-1];
		};
		result = fn[n];
	}
	res.json({
		fibonacci : result
	})
});
