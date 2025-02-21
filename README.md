# Book Management App - Homework 4

## Overview
A React and Node.js (Sequelize) project for managing books with CRUD operations.

## React Application
- **Home Page:** Displays all books (Route: `/`).
- **Add a New Book:** (Route: `/create`)
  - Input: Book Title, Author Name.
  - Adds a book and redirects to Home.
- **Update Book:** (Route: `/update`)
  - Input: Book Title, Author Name.
  - Updates a book and redirects to Home.
- **Delete Book:** (Route: `/delete`)
  - Deletes a book and redirects to Home.
- **Routing & Hooks:** Uses React-Router-Dom, `useState`, and `useEffect`.

## MySQL with Node.js (Sequelize)
- Database: `book_db` with `books` table.
- **API Endpoints:**
  - POST `/books` - Add a new book.
  - GET `/books` - View all books.
  - GET `/books/:id` - View book by ID.
  - PUT `/books/:id` - Update book details.
  - DELETE `/books/:id` - Delete a book.
