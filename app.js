var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

//port number specification
var port = process.env.port || 3000;

//MongoDB connection
var db = mongoose.connect('mongodb://sarthakdb:123ertyu@ds243345.mlab.com:43345/diary');

//Model file code required
var Book = require('./models/bookModel');

//URL POST request using body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api', bookRouter);

//run as localhost:3000/
app.get('/', function(req, res){
res.send('hello ');
});

//listening to a port
app.listen(port, function(){

	console.log('Running on port' +port); 
});
