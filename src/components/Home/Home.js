import { Link } from 'react-router-dom';

import './Home.css';
import BookCard from '../BookCard/BookCard';

const Home = () => {
    return(
      <>
        <div className="header-image content-wrapper">
        <img src="./img/header-image.jpg" alt=""/>
        <h1>Free online book reviewer</h1>
        </div>
        
        <main className="content-wrapper">

        <section className="explore-books">
        <h1 className="home-heading">Explore Books</h1>

        <div className="book-cards-wrapper">
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
        <Link to="/books" className="view-all-home-button">View All</Link>
        </section>
        
        
        
</main>
</>
    );
};


export default Home;