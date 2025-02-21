import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BookContext } from "../../App";
import "./UpdateBook.css";

const UpdateBook = () => {
  const { id } = useParams();
  const { books, setBooks } = useContext(BookContext);
  const navigate = useNavigate();
  const book = books.find((b) => b.id === parseInt(id));
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);

  const handleUpdate = (e) => {
    e.preventDefault();
    setBooks(books.map((b) => (b.id === parseInt(id) ? { id: b.id, title, author } : b)));
    navigate("/");
  };

  const handleCancel = () => {
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
          <button className="cancel-button" type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};
export default UpdateBook;