import './Home.css';
import BookCard from '../BookCard/BookCard'
import AuthorCard from '../AuthorCard/AuthorCard';

const Home = () => {
    return(
      <>
        <div class="header-image content-wrapper">
        <img src="./img/header-image.jpg" alt=""/>
        <h1>Free online book reviewer</h1>
        </div>
        
        <main class="content-wrapper">

        <section class="explore-books">
        <h1 class="home-heading">Explore Books</h1>

        <div class="book-cards-wrapper">
          <BookCard />
          <BookCard />
        </div>
        <a href="" class="view-all-home-button">View All</a>
        </section>
        
        <section class="explore-authors">
        <h1 class="home-heading">Explore Authors</h1>

        <div class="book-cards-wrapper">
          <AuthorCard />
          <AuthorCard />
        </div>
        <a href="" class="view-all-home-button">View All</a>
      </section>
        
</main>
</>
    );
};


export default Home;