import { createSlice } from "@reduxjs/toolkit";
const bookInitialState = {
  bookList: [
    { name: "Love Bangladesh", writer: "Ali khan" },
    { name: "History of Bangladesh", writer: "Sumon barai" },
  ],
};

const bookListSlice = createSlice({
  name: "bookList",
  initialState: bookInitialState,
  reducers: {
    getBookList: (state) => state,
    addBookList: (state, action) => {
      state.bookList.push(action.payload);
    },
    deleteBook: (state, action) => {
      const remainBook = state.bookList.filter(
        (book, index) => index !== action.payload
      );
      state.bookList = remainBook;
    },
    updateBook: (state, action) => {
      const { updatedName, updatedWriter } = action.payload;
      const isExist = state.bookList.filter(
        (book, index) => index === action.payload.index
      );
      if (isExist) {
        isExist[0].name = updatedName;
        isExist[0].writer = updatedWriter;
      }
    },
  },
});
export const { getBookList, addBookList, deleteBook, updateBook } =
  bookListSlice.actions;
export default bookListSlice.reducer;
