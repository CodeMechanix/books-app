import BookShow from "./BookShow";

export default function BookList({ bookStoreState, removeBookCallBack, editBookPropCallBack }) {
  return (
    
      <ul >
        {bookStoreState.map((book) => (
          <BookShow book={book} removeBookCallBack={removeBookCallBack} editBookPropCallBack={editBookPropCallBack } />
        ))}
      </ul>
    
  );
}