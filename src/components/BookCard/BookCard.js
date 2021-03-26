import './BookCard.css'

const BookCard = () => {
    return (
        <div class="book-card-wrapper">
  <div class="image-book-card-wrapper">
    <img src="./img/book-cover.jpg" alt="" />
  </div>
  <div class="content-book-card-wrapper">
    <h3 class="heading-book-card">Book Title</h3>
    <div class="info-book-card">
    <span class="rating"><i class="fas fa-star"></i>4.5</span>
    <span class="category">Action, Drama Action</span>
  </div>
    <p class="description-book-card">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime ab
      deleniti at dolorum maiores ratione. Accusantium molestiae perspiciatis
      assumenda excepturi cum labore! Ab tempora eaque optio fugit unde dicta
      magnam.
    </p>
    <span class="votes">Votes: 0</span>
  </div>
</div>
    );
};

export default BookCard;