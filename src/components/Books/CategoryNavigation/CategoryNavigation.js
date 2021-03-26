import './CategoryNavigation.css';

const CategoryNavigation = () => {
    return (
        <nav class="books-categories-nav">
        <ul>
          <li><a href="">All</a></li>
          <li><a href="">Action</a></li>
          <li><a href="">Drama</a></li>
          <li><a href="">Horror</a></li>
          <li><a href="">Fantasy</a></li>
        </ul>
      </nav>
    );
};

export default CategoryNavigation;