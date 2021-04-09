import './MainNavigation.css';
import { Link } from 'react-router-dom';
import { auth } from '../../utils/firebase';
import { useEffect, useState } from 'react';

const MainNavigation = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email,
    
  };
    return (
        <div className="main-menu-wrapper ">
        <nav className="content-wrapper">
            <h1 className="site-title"><Link to="/">BookReview</Link></h1>
            {authInfo.isAuthenticated ? (
              <ul>
              <li><Link to="/books">Books</Link></li>
              <li><Link to="/create">Add Book</Link></li>
              <li><Link to="/logout">Logout</Link></li>
              </ul>
              ) : (
                <ul>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/users/login">Login</Link></li>
                <li><Link to="/users/register">Signup</Link></li>
                </ul>
              )}
        </nav>
      </div>
    );
};

export default MainNavigation;