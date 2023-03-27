const home = document.getElementById('home__li');
const addBook = document.getElementById('add__book__li');
const contact = document.getElementById('contact__li');

// Show list view
function showlist() {
  home.addEventListener('click', () => {
    document.querySelector('.list-container').style.display = 'flex';
    document.querySelector('#add__book').style.display = 'none';
    document.querySelector('#contact').style.display = 'none';
  });
}

// Show add book view
function showAdd() {
  addBook.addEventListener('click', () => {
    document.querySelector('#home').style.display = 'none';
    const newBookContainer = document.querySelector('.new-book-container');
    if (newBookContainer) {
      newBookContainer.style.display = 'flex';
    }
    document.querySelector('#contact').style.display = 'none';
  });
}

// Show contact view
function showContact() {
  contact.addEventListener('click', () => {
    document.querySelector('#home').style.display = 'none';
    document.querySelector('#add__book').style.display = 'none';
    document.querySelector('#contact').style.display = 'flex';
  });
}

export { showAdd, showlist, showContact };
