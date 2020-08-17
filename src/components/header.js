import React from 'react'
import { Link } from 'gatsby'

// import './layout.css'

const Header = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        UK History Tourist
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="/blog">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              className="nav-link"
              activeClassName="active"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/thornfieldattic/"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="#">
              <i className="fab fa-facebook-square fa-2x"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Header
