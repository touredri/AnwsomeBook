import Storage from './storage.js';

export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    const div = document.createElement('div');
    div.classList.add('list');
    div.innerHTML = `<div class="row">
      <h3>"${this.title}"</h3> by
      <p>${this.author}</p></div>
      <a href="#" class="btn btn-danger btn-sm remove">Remove</a>
    `;
    const bookListElement = document.querySelector('.book-list');
    if (bookListElement) {
      bookListElement.appendChild(div);
      div.querySelector('.remove').addEventListener('click', (event) => {
        event.preventDefault();
        Book.deleteBookList(event.target);
      });
    }
  }

  static deleteBookList(element) {
    if (element.classList.contains('remove')) {
      element.parentElement.remove();
      const bookIndex = Array.from(document.querySelectorAll('.book-list .list')).indexOf(element.parentElement);
      Storage.deleteBook(bookIndex);
    }
  }

  static clearFormInputs() {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    if (title && author) {
      title.value = '';
      author.value = '';
    }
  }

  static displayBooks() {
    const books = Storage.getBooks();
    books.forEach((book) => {
      const newBook = new Book(book.title, book.author);
      newBook.addBook();
    });
  }
}
