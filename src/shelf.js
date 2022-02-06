
function shelfBook(title, shelves) {
  // this checks the length of shelves & exits w/o doing anything
  if (shelves.length >= 3) {
    return
  }
  // this adds title if shelves is under 3
      shelves.unshift(title)
}

function unshelfBook(title, shelves) {
  for (var i = 0; i < shelves.length; i++) {
    if (title === shelves[i].title) {
      shelves.splice(i,1);
      return
    }
  }
}

function listTitles(shelves) {
  var bookTitles = "";
    for (var i = 0; i < shelves.length; i++) {
      if (i === shelves.length - 1) {
        bookTitles += shelves[i].title
      } else {
        bookTitles += shelves[i].title + ", "
      }
  }
      return bookTitles
}

function searchShelf(shelves, title) {
  for (var i = 0; i < shelves.length; i++) {
    if (i === shelves.title) {
    //   title === true;
    // // } else {
    // //   title !== false;
      return [i]
    }
  }
}





module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf,
};
