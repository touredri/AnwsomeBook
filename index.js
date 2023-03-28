import Book from './modules/Book.js';
import Storage from './modules/storage.js';
import { showAdd, showlist, showContact } from './modules/content.js';
import updateDate from './modules/date.js';

// Update date on page load
updateDate();

showAdd();
showlist();
showContact();

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
  Storage.addBook(newBook);

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
      const bookIndex = Array.from(
        document.querySelector('.book-list').children,
      ).indexOf(listContainer);
      Book.deleteBookList(listContainer);
      Storage.deleteBook(bookIndex);
    }
  }
});
