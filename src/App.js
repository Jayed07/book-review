import './App.css';
import Footer from './components/Footer/Footer';
import MainNavigation from './components/MainNavigation/MainNavigation';
import Home from './components/Home/Home';
import BookCard from './components/BookCard/BookCard';

function App() {
  return (
    <div className="container">
    <MainNavigation />
    <Home />
    <Footer />

    
    </div>
  );
}

export default App;