import React, { useContext, useState, useEffect } from "react";
import { Pencil, Trash2 } from "lucide-react"; // Importing icons
import { Link } from "react-router-dom";
import { BookContext } from "../../App";
import "./Home.css";

const Home = () => {
    const { books } = useContext(BookContext);
   

    return (
      <div className="home-container">
        <h1 className="title">Book Management</h1>
        <hr />
        <p className="add-book-text">
            Got a new book?  
            <Link to="/create">
                <button className="add-button">Add it here!</button>
            </Link>
        </p>
        <table className="book-table">
          <thead>
            <tr>
                <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td><b>{book.id}</b></td>
                <td><b>{book.title}</b></td>
                <td><b>{book.author}</b></td>
                <td>
                    <Link to={`/update/${book.id}`}>
                        <Pencil className="icon edit-icon" />
                    </Link>
                    <Link to={`/delete/${book.id}`}>
                        <Trash2 className="icon delete-icon" />
                    </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};
export default Home;
