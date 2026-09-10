import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const Book = () => {
  return (
      <div className="book">
              <a href="#featured">
                <figure className="book__img--wrapper">
                  <img
                    src="https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg"
                   alt =""/>
                </figure>
              </a>
              <div className="book__title">
                <a href="/" className="book__title--link">
                  Atomic Habits                
                </a>
              </div>
              <div className="book__ratings">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
              <div className="book__price">
                <span className="book__price--normal">$11.99</span>
                $10.00
              </div>
            </div>
  )
}
export default Book 