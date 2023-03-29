export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static books = [];

  static listBook = document.querySelector('.book-list');

  static addList() {
    let output = '';
    let i = 0;
    // eslint-disable-next-line array-callback-return
    Book.books.map((element) => {
      i += 1;
      element.id = i;
      output += `
      <li class="row list" id="${element.id}">
        <div class="row"><h3>"${element.title}"</h3> by
        <p>${element.author}</p></div>
        <a href="#" class="remove">Remove</a></li>
      `;
    });
    Book.listBook.innerHTML = output;
    return output;
  }

  static addBook() {
    const newBook = new Book();
    newBook.title = document.querySelector('#title').value;
    newBook.author = document.querySelector('#author').value;
    this.books.push(newBook);
    localStorage.setItem('books', JSON.stringify(Book.books));
    Book.addList();
  }

  static removeBook(e) {
    const filterBook = Book.books.filter(
      (element) => element.id.toString() !== e.toString(),
    );
    // console.log(filterBook);
    Book.books = filterBook;
    localStorage.setItem('books', JSON.stringify(Book.books));
    Book.addList();
  }

  static loadBooks() {
    const books = JSON.parse(localStorage.getItem('books'));
    if (books) {
      Book.books = books;
      Book.addList();
    }
  }
}
