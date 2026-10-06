import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const Book = ({ book }) => {
  return (
    <div className="book">
      <a href="#featured">
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" />
        </figure>
      </a>
      <div className="book__title">
        <a href="/" className="book__title--link">
          {book.title}
        </a>
      </div>
      <div className="book__ratings">
        {new Array(Math.floor(book.rating)).fill(0).map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} />
        ))}
        {book.rating % 1 !== 0 && <FontAwesomeIcon icon={faStarHalfAlt} />}
        {/* alt:!Number.isInteger(book.rating) && <FontAwesomeIcon icon={faStarHalfAlt} /> */}
      </div>
      <div className="book__price">
        {book.salePrice ? (
          <>
            <span className="book__price--normal">
              ${book.originalPrice.toFixed(2)}
            </span>
            ${book.salePrice.toFixed(2)}
          </>
        ) : (
          <> ${book.originalPrice.toFixed(2)}</>
        )}
      </div>
    </div>
  );
};
export default Book;
