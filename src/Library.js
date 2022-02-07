function createLibrary(name, shelves) {
return {
  name: name,
  shelves: {
    fantasy: [],
    fiction: [],
    nonFiction: [],
    }
  }
}

function addBook(library, book) {
// find shelf we want to add book //
// console.log(library.shelves[book.genre])
// console.log(book.genre)
// put book on shelf
var shelfToAddBook = library.shelves[book.genre];
shelfToAddBook.push(book);
}

function checkoutBook(title, shelves) {
  for (var i = 0; i < shelves.length; i++) {
    if (title === shelves[i].title) {
      shelves.splice(i,1);
      return
    }
  }



  // var
  // var
  // for
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
