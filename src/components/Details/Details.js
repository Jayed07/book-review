import './Details.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as booksService from '../../service/booksService';
import { auth } from '../../utils/firebase';

import ReviewCard from '../ReviewCard/ReviewCard';

const Details = ({
  match,
  history
}) => {
  let [book, setBook] = useState({});
  let [bookReviews, setBookReviews] = useState({});
  let isNull = false;
  const [user, setUser] = useState(null);

  useEffect(() => {
    booksService.getOne(match.params.bookId)
      .then(res => setBook(res));

    let bookReviewsList = book.reviews;
    setBookReviews(bookReviewsList);

    auth.onAuthStateChanged(setUser);
  }, []);

  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email,
  };

  if (bookReviews === undefined) {
    isNull = true;
  }
  console.log(book)
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


            {authInfo.isAuthenticated ? (
              <div>
                <div className="buttons-wrapper">
                  <Link to={`/books/details/${book.id}/add-review`} className="review-button">Add Review</Link>
                  <Link to={`/books/details/${book.id}/add-rating`} className="rating-button">Add rating</Link>
                </div>
                <div className="created-by-buttons">
                  <Link to={`/books/details/${book.id}/edit`} className="edit-button">Edit Book</Link>
                  <button onClick={() => booksService.deleteOne(book.id).then(history.push("/deleted"))} className="delete-button">Delete Book</button>
                </div></div>
            ) : (
              <div></div>
            )}

          </div>
        </div>
      </div>

      <br />
      <Link to={`/books/details/${book.id}/reviews`} className="review-button">View reviews</Link>

    </main>
  );
};

export default Details;