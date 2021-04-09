import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/Footer';
import MainNavigation from './components/MainNavigation/MainNavigation';
import Home from './components/Home/Home';
import Books from './components/Books/Books';
import Details from './components/Details/Details';
import Reviews from './components/Reviews/Reviews';
import AddReview from './components/AddReview/AddReview';
import AddRating from './components/AddRating/AddRating';
import AddBook from './components/AddBook/AddBook';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import EditBook from './components/EditBook/EditBook';
import DeleteSuccess from './components/DeleteSuccess/DeleteSuccess';
import { auth } from './utils/firebase';
import isAuth from './hoc/isAuth';
import AuthContext from './contexts/AuthContext';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email,
    
  };

  return (
    <div className="container">
      <AuthContext.Provider value={authInfo}>
      <MainNavigation />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/books"  component={Books} />
        <Route path="/books/:category" exact component={Books} />
        <Route exact path="/books/details/:bookId" component={Details} />
        <Route path="/books/details/:bookId/reviews" component={Reviews} />
        <Route path="/books/details/:bookId/add-review" component={AddReview} />
        <Route path="/books/details/:bookId/add-rating" component={AddRating} />
        <Route path="/books/details/:bookId/edit" component={EditBook} />
        <Route path="/create"  component={isAuth(AddBook)} />
        <Route path="/deleted"  component={DeleteSuccess} />
        <Route path="/users/login" component={Login} />
        <Route path="/users/register" component={Register} />
        <Route path="/logout" render={() => {
          auth.signOut();
          return <Redirect to="/" />
        }} />
      </Switch>
      
      <Footer />
      </AuthContext.Provider>
    </div>
  );
}

export default App;