import React from "react";
import Student from './Student';
import { Route, Routes } from "react-router-dom";
import Book from './Book';
import {  Link } from "react-router-dom";
const Menu = () => {
  return (
    <div>
    <nav>
        <ul>
          <li>
            <Link to="/student">Student</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
