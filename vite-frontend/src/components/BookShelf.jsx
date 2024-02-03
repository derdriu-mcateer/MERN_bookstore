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
      <div key="bookshelf" className="book-shelf">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <h2 key={book.title} id="title"> {book.title}</h2>
            <p key={book.author} id="author">By: {book.author}</p>
            <p key={book.genre} id="genre">Genre: {book.genre}</p>
            <p key={book.description} id="description">Description: {book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
