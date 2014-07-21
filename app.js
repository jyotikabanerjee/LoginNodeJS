
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');

var welcome = require('./routes/welcome');
var http = require('http');
var path = require('path');


var books = require('./data/books');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);



app.get('/welcome', function(req, res){
    res.render('welcome');
});

app.get('/welcome:book_name', function(req, res){
    console.log(req.url);
    console.log(req.params);
    console.log(req.query);
    res.json('200', books.getBookByName(req.params.book_name));

});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
    /*console.log(books.getBookByName('Cranford'));
    console.log(books.getBooksByAuthorName('Elizabeth Gaskell'));*/

});
