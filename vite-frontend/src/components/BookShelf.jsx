import React, { useEffect, useState } from 'react';
import '../CSS/BookShelf.css'

export const BookShelf = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5555/books')
    .then(res => res.json())
    .then(data => setBooks(data))
  }, []);

  return (
    <div>
      <div class="book-shelf">
        {books.map((book) => (
          <div key={book.id} class="book-card">
            <h2 id="title"> {book.title}</h2>
            <p id="author">By: {book.author}</p>
            <p id="genre">Genre: {book.genre}</p>
            <p id="description">Description: {book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
