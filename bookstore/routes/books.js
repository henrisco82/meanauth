const express = require('express');
const router = express.Router();

const Book = require('../models/book');


router.get('/books', (req, res, next)=>{
    Book.find({}, (err, books)=>{
        if (err) throw err;
        res.json(books);
    })
});

router.get('/books/:_id', (req, res, next)=>{
    Book.getBookById(req.params._id, (err, books)=>{
        if (err) throw err;
        res.json(books);
    })
});


router.post('/books', (req, res, next)=>{
    var newBook = new Book({
        title: req.body.title,
        genres: req.body.genres,
        description: req.body.description,
        publisher: req.body.publisher,
        author: req.body.author,
        pages: req.body.pages,
        image_url: req.body.image_url,
        buy_url: req.body.buy_url
    });

    newBook.save((err)=>{
       if(err) throw err;
       else{
           res.json({success: true, msg:'book added successfully'});
       }
    });
});

router.put('/books/:_id', (req, res, next)=>{
    var id = req.params._id;
    var newBook = new Book({
        title: req.body.title,
        genres: req.body.genres,
        description: req.body.description,
        publisher: req.body.publisher,
        author: req.body.author,
        pages: req.body.pages,
        image_url: req.body.image_url,
        buy_url: req.body.buy_url
    });

    Book.updateBook(id, newBook, (err)=>{
       if(err) throw err;
       else{
           res.json({success: true, msg:'book updated successfully'});
       }
    });
});

router.delete('/books/:_id', (req, res, next)=>{
   var id = req.params._id;
    Book.removeBook(id, (err, books)=>{
        if (err) throw err;
        res.json(books);
    })
});



module.exports = router;