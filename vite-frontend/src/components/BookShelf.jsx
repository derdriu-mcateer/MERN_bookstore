import React, { useEffect, useState } from 'react';

export const BookShelf = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5555/books')
    .then(res => res.json())
    .then(data => setBooks(data))
  }, []);

  return (
    <div>
      <div>
        {books.map((book) => (
          <p key={book.id}>{book.title}</p>
        ))}
      </div>
    </div>
  );
};
