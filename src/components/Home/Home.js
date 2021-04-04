import { Link } from 'react-router-dom';
import { Component } from 'react';
import * as booksService from '../../service/booksService';

import './Home.css';
import BookCard from '../BookCard/BookCard';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    }
  }

  componentDidMount() {
    booksService.getAll()
    .then(res => {this.setState({books: res})})
  }

  render() {
    return(
      <>
        <div className="header-image">
        <img src="./img/header-image.jpg" alt=""/>
        <h1>Free online book reviewer</h1>
        </div>
        
        <main className="content-wrapper">

        <section className="explore-books">
        <h1 className="home-heading">Explore Books</h1>

        <div className="book-cards-wrapper">
        {this.state.books.map(x => 
            <BookCard key={x.id} {...x}/>
            )} 
        </div>
        <Link to="/books" className="view-all-home-button">View All</Link>
        </section>
        
        
        
</main>
</>
    );
};
}

export default Home;