import './MainNavigation.css';
import { Link } from 'react-router-dom';


const MainNavigation = () => {
    return (
        <div className="main-menu-wrapper ">
        <nav className="content-wrapper">
            <h1 className="site-title"><Link to="/">BookReview</Link></h1>
         
              <ul>
                  <li><Link to="/books">Books</Link></li>
                  <li><Link to="/create">Add Book</Link></li>
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