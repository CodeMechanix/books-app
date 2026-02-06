import { useState } from "react";
import BookEdit from "./BookEdit";

export default function BookShow({ book, removeBookCallBack, editBookPropCallBack }) {

  const [isEditing, setIsEditing] = useState(false);

  const editBookProp = (id, newName) => {
    editBookPropCallBack(id, newName);
  };

  return (
    <li key={book.id} style={{ display: "flex"}}>
      {!isEditing && <span>{book.name}</span>} 
      {isEditing && <BookEdit book={book} editBookProp={editBookProp} setIsEditing={setIsEditing} />}
      <button onClick={() => setIsEditing(!isEditing)}>{isEditing ? "Cancel" : "Edit"}</button>
      <button onClick={() => removeBookCallBack(book.id)}>Delete</button>
    </li>
    
  );
}