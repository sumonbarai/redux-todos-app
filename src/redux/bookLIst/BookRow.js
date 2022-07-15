import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "./booklistSlice";

const BookRow = ({ book, index }) => {
  const dispatch = useDispatch();
  const { name, writer } = book;
  const handleDelete = () => {
    const confirm = window.confirm("Are sure Delete Book?");
    if (confirm) {
      dispatch(deleteBook(index));
    }
  };
  return (
    <tr align="center">
      <th scope="row">{index + 1}</th>
      <td>{name}</td>
      <td>{writer}</td>
      <td>
        <Link to="/update" state={{ name, writer, index }}>
          <button className="btn btn-success m-1">Edit</button>
        </Link>
        <button className="btn btn-danger m-1" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BookRow;
