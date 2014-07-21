/**
 * Created by jyotikabanerjee on 13/07/14.
 */
var booksdb = require('./bookDB');

exports.getBookByName = function (book_name) {
    var book_names = booksdb.books.map(function(elem){
        return elem.title.toLocaleLowerCase();
    });

    var index = book_names.indexOf(book_name);

    if(index !== -1){
        return booksdb.books[index];
    }
    else{
        return "Book Not Found...";
    }

};

exports.getBooksByAuthorName = function (authorname) {
    var author_names = booksdb.books.map(function(elem){
        return elem.authors;
    });

    //author_names is now an array of object authors with one or more names

    var bookElements = [];
    var i = 0;
    author_names.forEach(function (elem) {
        for(var prop in elem){
            if(elem[prop] === authorname){
                bookElements.push(booksdb.books[i]);
            }
        }
        i++;
    });
    return bookElements;
};