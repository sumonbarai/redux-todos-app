import React from "react";
import { useSelector } from "react-redux";
import BookRow from "./BookRow";

const BookList = () => {
  const { bookList } = useSelector((state) => state.BookList);
  return (
    <div>
      <section className="table-area">
        <div className="container">
          <div className="row">
            <div className="col">
              <table className="table">
                <thead>
                  <tr align="center">
                    <th scope="col">Serial No.</th>
                    <th scope="col">Book Name</th>
                    <th scope="col">Writer</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bookList?.map((book, index) => (
                    <BookRow key={index} book={book} index={index}></BookRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookList;
