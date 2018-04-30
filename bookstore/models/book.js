const mongoose = require('mongoose');
const config = require('../config/database.js');

//Book Schema
const BookSchema = mongoose.Schema({
   title: {
       type: String,
       required: true
   },
   genres: {
       type: String,
       required: true
   },
   description: {
       type: String,
       required: true
   },
   author: {
       type: String,
       required: true
   },
   publisher: {
       type: String
   },
   pages: {
       type: String
   },
   image_url: {
       type: String
   },
    buy_url: {
       type: String
   },
   create_date: {
       type: Date,
       default: Date.now
   }

});

const Book = module.exports = mongoose.model('Book', BookSchema);

module.exports.getBooks = function(limit, callback){
    Book.find(callback).limit(limit);
}

module.exports.getBookById = function(id, callback){
    Book.findById(id, callback);
}

module.exports.getBookByTitle = function(title, callback){
    const query = {title: title}
    Book.findOne(query, callback);
}

module.exports.updateBook = function(id, book, callback){
    var query = {_id : id};
    var update = {
        title: book.title,
        genres: book.genres,
        description: book.description,
        publisher: book.publisher,
        author: book.author,
        pages: book.pages,
        image_url: book.image_url,
        buy_url: book.buy_url
    }
    Book.findOneAndUpdate(query, update, callback)
}

module.exports.removeBook = function(id, callback){
    var query = {_id : id};
    Book.remove(query, callback); 
}
