import './AuthorCard.css'

const AuthorCard = () => {
    return (
        <div class="author-card-wrapper">
          <div class="image-author-card-wrapper">
            <img src="./img/book-cover.jpg" alt="" />
          </div>
          <div class="content-author-card-wrapper">
            <h3 class="heading-author-card">Author name</h3>
            <div class="info-author-card">
            <span class="rating"><i class="fas fa-star"></i>4.5</span>
            <span class="category">Books: 0</span>
          </div>
            <p class="description-author-card">
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

export default AuthorCard;