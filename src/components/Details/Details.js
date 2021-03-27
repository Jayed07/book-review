import './Details.css';
import { Link } from 'react-router-dom';

const Details = () => {
    return (
        <main className="content-wrapper">
        <div class="details-section-wrapper">
        <img class="book-details-img" src="/img/book-cover.jpg" alt="" />

        <div class="info-details-wrapper">
          <div class="first-section">
            <h1 class="book-title-details">Book title</h1>
            <h2 class="book-category-details">Book Category</h2>
            <p class="book-description-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              libero deserunt nihil, dolorum quibusdam qui dolorem eum amet
              praesentium pariatur explicabo doloremque. Nesciunt, quae?
              Molestias tempora eius consequatur ratione placeat?
            </p>
          </div>
          <div class="second-section">
              <h2 class="book-author-details">Author: Pesho</h2>
              <span class="book-rating-details">Rating: 3</span>
              <span class="book-votes-details">Votes: 3</span>
              <div class="buttons-wrapper">
              <Link to="/books/details/add-review" class="review-button">Add Review</Link>
              <Link to="/books/details/add-rating" class="rating-button">Add rating</Link>
            </div>
            <div class="created-by-buttons">
              <a href="" class="edit-button">Edit Book</a>
              <a href="" class="delete-button">Delete Book</a>
            </div>
          </div>
        </div>
      </div>
      </main>
    );
};

export default Details;