import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "../../redux/bookLIst/booklistSlice";

const Update = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, writer, index } = location.state;

  const [updatedName, setUpdatedName] = useState(name);
  const [updatedWriter, setUpdatedWriter] = useState(writer);

  const dispatch = useDispatch();

  const handleForm = () => {
    const updateDate = {
      updatedName: updatedName,
      updatedWriter: updatedWriter,
      index: index,
    };
    dispatch(updateBook(updateDate));
    navigate("/home", { replace: true });
  };

  return (
    <div>
      <form className="custom-form" onSubmit={handleForm}>
        <label htmlFor="name">Book name</label>
        <input
          id="name"
          type="text"
          name="bookName"
          placeholder="Type Book Name"
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
          required
        />
        <label htmlFor="writer">Writer name</label>
        <input
          id="writer"
          type="text"
          name="writerName"
          placeholder="Type book writer name"
          value={updatedWriter}
          onChange={(e) => setUpdatedWriter(e.target.value)}
          required
        />
        <button>update book</button>
      </form>
    </div>
  );
};

export default Update;
