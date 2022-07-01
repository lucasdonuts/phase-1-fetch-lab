function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(res => res.json())
    .then((data) => {
      console.log(data[4])
      renderBooks(data)
    })
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

// function fifthBook() {
//   console.log("Fifth Book in Series: ", bookList)
// }

// fifthBook()