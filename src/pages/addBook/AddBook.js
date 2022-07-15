import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBookList } from "../../redux/bookLIst/booklistSlice";
import "./AddBook.css";

const AddBook = () => {
  const { bookList } = useSelector((state) => state.BookList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    const addBook = {
      id: bookList.length + 1,
      name: e.target.bookName.value,
      writer: e.target.writerName.value,
    };
    dispatch(addBookList(addBook));
    e.target.reset();
    navigate("/");
  };
  return (
    <div className="addBook-area">
      <div className="container">
        <h3 className="text-uppercase text-center">please added new book</h3>
        <form className="custom-form" onSubmit={handleForm}>
          <label htmlFor="name">Book name</label>
          <input
            id="name"
            type="text"
            name="bookName"
            placeholder="Type Book Name"
            required
          />
          <label htmlFor="writer">Writer name</label>
          <input
            id="writer"
            type="text"
            name="writerName"
            placeholder="Type book writer name"
            required
          />
          <button>add book</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
