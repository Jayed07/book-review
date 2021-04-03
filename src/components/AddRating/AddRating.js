import * as booksService from '../../service/booksService';
import { useEffect, useState } from 'react';


const AddRating = ({
    match,
    history
}) => {
  let [book, setBook] = useState({});

  useEffect(() => {
    booksService.getOne(match.params.bookId)
    .then(res => setBook(res));
  }, []);

  const onAddRating = (e) => {
    e.preventDefault();

    const { rating } = e.target;
 
    let newVotes = Number(book.votes + 1);

    let totalScore = Number(book.totalRating) + Number(rating.value);
    let newRating = (totalScore / newVotes).toFixed(2);

   
    let bookId = match.params.bookId;

    book.totalRating = totalScore;
    book.rating = newRating;
    book.votes = newVotes;

    booksService.update(bookId, book)
    .then(() => {
        history.push(`/books/details/${bookId}`);
        return;
    });
   
  }
    
    return (
        <main className="content-wrapper">
            <div className="form-container">
                <h1>Add Book</h1>
                <form onSubmit={onAddRating}>

                    <label htmlFor="rating">Rating</label>
                    <select id="rating" name="rating">
                        <option value="1">1.0</option>
                        <option value="2">2.0</option>
                        <option value="3">3.0</option>
                        <option value="4">4.0</option>
                        <option value="5">5.0</option>
                    </select>

                    <input type="submit" value="Post Rating" />
                </form>
            </div>
        </main>
    );
};

export default AddRating;