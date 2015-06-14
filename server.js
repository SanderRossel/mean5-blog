var express = require('express');
var app = express();

app.set('views', './jade-examples')
app.set('view engine', 'jade');

// Use hello-jade as index.
app.get('/', function (req, res) {
    res.render('hello-jade');
});

app.get('/javascript', function (req, res) {
    res.render('javascript', {
        title: 'Jade and JavaScript!',
        text: 'You can just insert JavaScript Objects into your templates!'
    });
});

app.get('/base-inheritor', function (req, res) {
    res.render('base-inheritor');
});

app.get('/mixins', function (req, res) {
    res.render('mixins');
});

var server = app.listen(80, '127.0.0.1');