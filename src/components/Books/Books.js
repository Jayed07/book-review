import { Component } from 'react';
import * as booksService from '../../service/booksService';

import './Books.css';
import CategoryNavigation from './CategoryNavigation/CategoryNavigation';
import BookCard from '../BookCard/BookCard';



class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      currentCategory: 'all',
    }
  }

  componentDidMount() {
    booksService.getAll()
    .then(res => this.setState({ books: res}))
  }

  componentDidUpdate(prevProps) {
    const category = this.props.match.params.category;

    
    
    if (prevProps.match.params.category === category) {
      return;
    }


    booksService.getAll(category)
    .then(res => {
      
      this.setState({ books: res, currentCategory: category})
      })
    }

    render() {
      return (
        <main className="content-wrapper">

      <h1 className="books-page-heading">Categories</h1>

     <CategoryNavigation />

        <div className="book-cards-wrapper-books-page">
          
          {this.state.books.map(x => 
            <BookCard key={x.id} {...x}/>
            )} 
          </div>
    </main>
    );
    }
  }

export default Books;