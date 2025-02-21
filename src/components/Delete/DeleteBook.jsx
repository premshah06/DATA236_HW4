import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BookContext } from "../../App";
import "./DeleteBook.css";

const DeleteBook = () => {
  const { id } = useParams();
  const { books, setBooks } = useContext(BookContext);
  const navigate = useNavigate();

  const handleDelete = () => {
    setBooks(books.filter((b) => b.id !== parseInt(id)));
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="delete-container">
      <div className="delete-box">
        <h2 className="delete-title">Are you sure you want to delete this book?</h2>
        <div className="button-group">
          <button className="confirm-button" onClick={handleDelete}>Delete</button>
          <button className="cancel-button" onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
