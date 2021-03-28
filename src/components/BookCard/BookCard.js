import { Link } from 'react-router-dom';

import './BookCard.css'

const BookCard = ({
  id,
  title,
  author,
  description,
  category,
  rating,
  imageUrl,
  votes,
}) => {
    return (
      <Link to={`/books/details/${id}`}>
        <div className="book-card-wrapper">
  <div className="image-book-card-wrapper">
    <img src={imageUrl} alt="" />
  </div>
  <div className="content-book-card-wrapper">
    <h3 className="heading-book-card">{title}</h3>
    <div className="info-book-card">
    <span className="rating"><i className="fas fa-star"></i>{rating}</span>
    <span className="category">{category}</span>
  </div>
    <p className="description-book-card">
      {description}
    </p>
    <span className="votes">Votes: {votes}</span>
  </div>
</div>
</Link>
    );
};

export default BookCard;