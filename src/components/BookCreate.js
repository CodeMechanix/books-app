export default function BookCreate({ onSubmitProp }) {
  return (
      <form onSubmit={onSubmitProp}>
      <input type="text" placeholder="Book Name" id="bookName" />
      <button>Add Book</button>

      </form>
  );
}