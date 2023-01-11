import React, { Component } from 'react';
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from "react-router-dom"
function Nav() {
  return (
    <div>
      <nav className="">
        <ul className="nav ">
          <li className="nav-items">
            <Link to="/" className="nav-link">
              Temperateur
            </Link>
          </li>
          <li className="nav-item">
            <Link to="weather" className="nav-link">
              Weather
            </Link>
          </li>
          <li className="nav-item">
            <Link to="items" className="nav-link">
              Items
            </Link>
          </li>
          <li className="nav-item">
            <Link to="questions" className="nav-link">
              Questions
            </Link>
          </li>
          <li className="nav-item">
            <Link to="notes" className="nav-link">
              Notes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="moneymanager" className="nav-link">
              Money Manager
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav