import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddBook from "./pages/addBook/AddBook";
import Home from "./pages/home/Home";
import Update from "./pages/updatePage/Update";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import NotFound from "./shared/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addBook" element={<AddBook></AddBook>} />
        <Route path="/update" element={<Update></Update>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
