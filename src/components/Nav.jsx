import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import LibraryLogo from "../assets/Library.svg";
const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <a href="/">
          <img src={LibraryLogo} alt="Library Logo" className="logo" />
        </a>
        <ul className="nav__links">
          <li className="nav__link">
            <a href="/">Home</a>
          </li>
          <li className="nav__link">
            <a href="/">Books</a>
          </li>
          <button className="btn__menu">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <li className="nav__icon">
            <a href="/cart" className="nav__link">
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
