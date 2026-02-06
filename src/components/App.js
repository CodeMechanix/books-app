import { useState, useEffect } from "react";

export default function App() {

  const [bookStore, setBookStore] = useState(() => {
    const saved = localStorage.getItem("bookStore");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("bookStore", JSON.stringify(bookStore));
  }, [bookStore]);
  
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Welcome to my React application.</p>
      <button onClick={() => {
        const newBook = new Book(`New Book ${Date.now()}`, bookStore.length + 1);
        setBookStore([...bookStore, newBook]);
      }}>Add Book</button>
      <h2>Book List:</h2>
      <ul>
        {bookStore.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
}

class Book {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}