import { configureStore } from "@reduxjs/toolkit";
import booklistSlice from "../../redux/bookLIst/booklistSlice";

const store = configureStore({
  reducer: {
    BookList: booklistSlice,
  },
});
export default store;
