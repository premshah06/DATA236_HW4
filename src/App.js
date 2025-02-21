import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import CreateBook from "./components/Create/CreateBook";
import UpdateBook from "./components/Update/UpdateBook";
import DeleteBook from "./components/Delete/DeleteBook";
import "./App.css";

export const BookContext = createContext();

const App = () => {
  const [books, setBooks] = useState([]);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateBook />} />
          <Route path="/update/:id" element={<UpdateBook />} />
          <Route path="/delete/:id" element={<DeleteBook />} />
        </Routes>
      </Router>
    </BookContext.Provider>
  );
};

export default App;