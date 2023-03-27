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
    if(bookListElement) {
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
      Book.deleteBook(bookIndex);
    }
  }

  static clearFormInputs() {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    if(title && author) {
      title.value = '';
      author.value = '';
    }
  }

  static displayBooks() {
    const books = Book.getBooks();
    books.forEach((book) => {
      const newBook = new Book(book.title, book.author);
      newBook.addBook();
    });
  }

  static addBook(book) {
    const books = Book.getBooks();
    // Check if the book already exists before adding it
    if(!books.some(item => item.title === book.title && item.author === book.author)) {
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
  }

  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static deleteBook(bookIndex) {
    const books = Book.getBooks();
    books.splice(bookIndex, 1);
    localStorage.setItem('books', JSON.stringify(books));
  }
}
