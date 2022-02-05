function createTitle(bookTitle) {
  return "The " + bookTitle
}

function buildMainCharacter(name, age, pronouns) {
  return {
  name: name,
  age: age,
  pronouns: pronouns,
  }
}
function saveReview(addReview, reviews) {
  if (reviews.includes(addReview) === false)
  return reviews.push(addReview)
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20

}

function writeBook(bookTitle, main, genre) {
  return {
  title: bookTitle,
  mainCharacter: main,
  pageCount: calculatePageCount(bookTitle),
  genre: genre,
  }
}

function editBook(book) {
  book.pageCount = book.pageCount * .75
}



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
