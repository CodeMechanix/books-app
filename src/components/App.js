import { useState, useEffect } from "react";
import BookCreate from "./BookCreate";
import BookList from "./BookList";

export default function App() {

  const [bookStore, setBookStore] = useState(() => {
    const saved = localStorage.getItem("bookStore");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("bookStore", JSON.stringify(bookStore));
  }, [bookStore]);
  

  const addBook = (name) => {
    const newBook = new Book(name, crypto.randomUUID());
    setBookStore([...bookStore, newBook]);
  }

  const removeBook = (id) => {
    const updatedBooks = bookStore.filter((book) => book.id !== id);
    setBookStore(updatedBooks);
  }
  const editBook = (id, newName) => {
    const updatedBooks = bookStore.map((book) => {
      if (book.id === id) {
        return { ...book, name: newName };
      }
      return book;
    });
    setBookStore(updatedBooks);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.bookName;
    addBook(input.value);
    input.value = "";
  }

  return (
    <div>
      <BookCreate onSubmitProp={onSubmit} />
      <BookList bookStoreState={bookStore} removeBookCallBack={removeBook} editBookPropCallBack={editBook} />
    </div>
  );
}

class Book {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}