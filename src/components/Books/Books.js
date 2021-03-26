import './Books.css';
import './CategoryNavigation/CategoryNavigation';
import '../BookCard/BookCard';

const Books = () => {
    return (
        <main class="content-wrapper">

      <h1 class="books-page-heading">Categories</h1>

     <CategoryNavigation />

        <div class="book-cards-wrapper-books-page">
          
          <BookCard />
          <BookCard />
          <BookCard />
            
          </div>
    </main>
    );
};

export default Books;