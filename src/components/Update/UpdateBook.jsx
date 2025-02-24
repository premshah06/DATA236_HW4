import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BookContext } from "../../App";
import "./UpdateBook.css";

const UpdateBook = () => {
  const { id } = useParams();
  const { books, setBooks } = useContext(BookContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const book = books.find((b) => b.id === parseInt(id));
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
    }
  }, [id, books]);

  const handleUpdate = (e) => {
    e.preventDefault();
    setBooks(books.map((b) => (b.id === parseInt(id) ? { id: b.id, title, author } : b)));
    localStorage.setItem("books", JSON.stringify(books));
    navigate("/");
  };

  return (
    <div className="update-container">
      <h2 className="update-title">Update Book</h2>
      <form className="update-form" onSubmit={handleUpdate}>
        <input 
          className="input-field" 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <input 
          className="input-field" 
          type="text" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
          required 
        />
        <div className="button-group">
          <button className="update-button" type="submit">Update Book</button>
          <button className="cancel-button" type="button" onClick={() => navigate("/")}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBook;
