export default function BookEdit({ book, editBookProp, setIsEditing }) {



  return (
 
        <form onSubmit={(e) => {
          e.preventDefault();
          const input = e.target.elements.bookName;
          editBookProp(book.id, input.value);
          setIsEditing(false);
        }}>
            <input type="text" placeholder="Book Name" id="bookName" defaultValue={book.name} />
            <button>Save Changes</button>
        </form>
   
  );
}