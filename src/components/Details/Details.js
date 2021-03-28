import './Details.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as booksService from '../../service/booksService';

const Details = ({
  match,
}) => {
  let [book, setBook] = useState({});

  useEffect(() => {
    booksService.getOne(match.params.bookId)
    .then(res => setBook(res));
  }, []);

  
    return (
        <main className="content-wrapper">
        <div className="details-section-wrapper">
        <img className="book-details-img" src={book.imageUrl} alt="" />

        <div className="info-details-wrapper">
          <div className="first-section">
            <h1 className="book-title-details">{book.title}</h1>
            <h2 className="book-category-details">Category: {book.category}</h2>
            <p className="book-description-details">
              {book.description}
            </p>
          </div>
          <div className="second-section">
              <h2 className="book-author-details">Author: {book.author}</h2>
              <span className="book-rating-details">Rating: {book.rating}</span>
              <span className="book-votes-details">Votes: {book.votes}</span>
              <div className="buttons-wrapper">
              <Link to={`/books/details/${book.id}/add-review`} className="review-button">Add Review</Link>
              <Link to={`/books/details/${book.id}/add-rating`} className="rating-button">Add rating</Link>
            </div>
            <div className="created-by-buttons">
              {/* <a href="#" className="edit-button">Edit Book</a>
              <a href="#" className="delete-button">Delete Book</a> */}
            </div>
          </div>
        </div>
      </div>
      </main>
    );
};

export default Details;