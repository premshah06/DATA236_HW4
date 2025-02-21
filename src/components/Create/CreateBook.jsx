import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../../App";
import "./CreateBook.css";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const { books, setBooks } = useContext(BookContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooks([...books, { id: books.length + 1, title, author }]);
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="create-container">
      <h2 className="create-title">Add a New Book</h2>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="input-field"
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <div className="button-group">
          <button className="add-button" type="submit">Add Book</button>
          <button className="cancel-button" type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default CreateBook;