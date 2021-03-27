import { Link } from 'react-router-dom';

import './Home.css';
import BookCard from '../BookCard/BookCard';

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
          <BookCard />
        </div>
        <Link to="/books" class="view-all-home-button">View All</Link>
        </section>
        
        
        
</main>
</>
    );
};


export default Home;