import { Route, Switch } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/Footer';
import MainNavigation from './components/MainNavigation/MainNavigation';
import Home from './components/Home/Home';
import Books from './components/Books/Books';
import Details from './components/Details/Details';
import AddReview from './components/AddReview/AddReview';
import AddRating from './components/AddRating/AddRating';
import AddBook from './components/AddBook/AddBook';
import MyProfile from './components/MyProfile/MyProfile';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="container">
      <MainNavigation />



      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/books" exact component={Books} />
        <Route path="/books/details" exact component={Details} />
        <Route path="/books/details/add-review" component={AddReview} />
        <Route path="/books/details/add-rating" component={AddRating} />
        <Route path="/books/create" component={AddBook} />
        <Route path="/users/profile" component={MyProfile} />
        <Route path="/users/login" component={Login} />
        <Route path="/users/register" component={Register} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;