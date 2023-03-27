export default class Storage {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Storage.getBooks();
    // Check if the book already exists before adding it
    if (
      !books.some(
        (item) => item.title === book.title && item.author === book.author,
      )
    ) {
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
  }

  static deleteBook(index) {
    const books = Storage.getBooks();
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
  }
}
