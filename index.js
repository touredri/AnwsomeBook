import Book from './modules/Book.js';

// Update date on page load
import updateDate from './modules/date.js';

const home = document.getElementById('home__li');
const addBook = document.getElementById('add__book__li');
const contact = document.getElementById('contact__li');

// Show list view
home.addEventListener('click', () => {
  document.querySelector('.list-container').style.display = 'flex';
  document.querySelector('#add__book').style.display = 'none';
  document.querySelector('#contact').style.display = 'none';
});

// Show add book view
addBook.addEventListener('click', () => {
  document.querySelector('#home').style.display = 'none';
  const newBookContainer = document.querySelector('.new-book-container');
  if (newBookContainer) {
    newBookContainer.style.display = 'flex';
  }
  document.querySelector('#contact').style.display = 'none';
});

// Show contact view
contact.addEventListener('click', () => {
  document.querySelector('#home').style.display = 'none';
  document.querySelector('#add__book').style.display = 'none';
  document.querySelector('#contact').style.display = 'flex';
});

// Display existing books on load
document.addEventListener('DOMContentLoaded', Book.displayBooks);

// Add a book
const formBook = document.querySelector('.new-book-container');
formBook.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const newBook = new Book(title, author);
  newBook.addBook();
  Book.addBook(newBook);

  Book.clearFormInputs();
  document.querySelector('#add__book').style.display = 'none';
  document.querySelector('.list-container').style.display = 'flex';
});

// Remove a book
document.querySelector('.book-list').addEventListener('click', (e) => {
  e.preventDefault();
  const removeButton = e.target.closest('.remove');
  if (removeButton) {
    const listContainer = removeButton.closest('.list-container');
    if (listContainer) {
      const bookIndex = Array.from(document.querySelector('.book-list').children).indexOf(listContainer);
      Book.deleteBookList(listContainer);
      Book.deleteBook(bookIndex);
    }
  }
});
updateDate();
