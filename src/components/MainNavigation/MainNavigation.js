import './MainNavigation.css';
import { Link } from 'react-router-dom';


const MainNavigation = () => {
    return (
        <div class="main-menu-wrapper ">
        <nav class="content-wrapper">
            <h1 class="site-title"><Link to="/">BookReview</Link></h1>
         
              <ul>
                  <li><Link to="/books">Books</Link></li>
                  <li><Link to="/books/create">Add Book</Link></li>
                  <li><Link to="/users/profile">My Profile</Link></li>
                  <li><Link to="/users/login">Login</Link></li>
                  <li><Link to="/users/register">Signup</Link></li>
                  <li><Link to="">Logout</Link></li>
              </ul>
         
        </nav>
      </div>
    );
};

export default MainNavigation;