import Book from './modules/Book.js';
import { navBar } from './modules/content.js';
import updateDate from './modules/date.js';

// Update date on page load
updateDate();

document.addEventListener('DOMContentLoaded', () => {
  navBar();
});

// Add a book
const formBook = document.querySelector('.add-form');
formBook.addEventListener('submit', (e) => {
  e.preventDefault();
  Book.addBook();
  formBook.reset();
  document.querySelector('#add__book').style.display = 'none';
  document.querySelector('.list-container').style.display = 'flex';
});

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    Book.removeBook(e.target.parentNode.id);
  }
});
window.addEventListener('load', () => {
  Book.loadBooks();
});
