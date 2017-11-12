var express = require('express');

var routes = function(Book){
	
	var bookRouter = express.Router();


 bookRouter.route('/Books')
.post(function(req, res){
	
	var book = new Book(req.body);
	book.save();
	res.status(201).send(book);
});
 
/* bookRouter.route('/Books')
.get(function(req, res){
	
	var resJSON = {hello:'This is my app'};
	
	res.json(resJSON);
}); */



 bookRouter.route('/Books')
.get(function(req, res){
	Book.find(function(err, books){
		if(err)
		res.status(500).send(err);
		//console.log(err);
		else
			res.json(books);
	});
	
});


//filter GET like http://localhost:3000/api/books?genre=fiction
/*  bookRouter.route('/Books')
.get(function(req, res){
	var query = {};
		if(req.query.genre){
			query.genre = req.query.genre;
		}
	Book.find(query, function(err, books){
		
		
		if(err)
		res.status(500).send(err);
		
		else
			res.json(books);
	});
	
});  */
/*
//filter GET by Id like http://localhost:3000/api/idnumber
bookRouter.route('/Books/:bookid')
.get(function(req, res){

	Book.findById(req.params.bookid, function(err, books){
		
		
		if(err)
		res.status(500).send(err);
		
		else
			res.json(books);
	});
	
})
.put(function(req, res){

	Book.findById(req.params.bookid, function(err, books){
		
		
		if(err)
		res.status(500).send(err);
		
		else
			books.title = req.body.title;
		books.author = req.body.author;
		books.genre = req.body.genre;
		books.save();
			res.json(books);
	});
	
})
.delete(function(req, res){

	Book.findById(req.params.bookid, function(err, books){
		
		
		
			req.books.remove(function(err){
				if(err)
					res.status(500).send(err);
				
				else{ 
				res.status(204).send('Removed!');
			}
			
	});
		 
	});
	
});*/

	return bookRouter;
};

module.exports = routes;
