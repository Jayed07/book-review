import { NavLink } from 'react-router-dom';
import './CategoryNavigation.css';

const CategoryNavigation = () => {
    return (
        <nav className="books-categories-nav">
        <ul>
          <li><NavLink to="/books/all">All</NavLink></li>
          <li><NavLink to="/books/action">Action</NavLink></li>
          <li><NavLink to="/books/drama">Drama</NavLink></li>
          <li><NavLink to="/books/horror">Horror</NavLink></li>
          <li><NavLink to="/books/fantasy">Fantasy</NavLink></li>
        </ul>
      </nav>
    );
};

export default CategoryNavigation;