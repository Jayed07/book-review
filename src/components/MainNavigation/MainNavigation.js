import './MainNavigation.css';
import { Link } from 'react-router-dom';


const MainNavigation = () => {
    return (
        <div class="main-menu-wrapper ">
        <nav class="content-wrapper">
            <h1 class="site-title"><a href="">BookReview</a></h1>
         
              <ul>
                  <li><a href="">Books</a></li>
                  <li><a href="">Authors</a></li>
                  <li><a href="">Add Book</a></li>
                  <li><a href="">My Profile</a></li>
                  <li><a href="">Login</a></li>
                  <li><a href="">Signup</a></li>
                  <li><a href="">Logout</a></li>
              </ul>
         
        </nav>
      </div>
    );
};

export default MainNavigation;