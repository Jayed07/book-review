import * as booksService from '../../service/booksService';
import * as reviewsService from '../../service/reviewsService';
import { useEffect, useState } from 'react';

const AddReview = ({
    match,
    history,
}) => {
    let [book, setBook] = useState({});

    useEffect(() => {
        booksService.getOne(match.params.bookId)
            .then(res => setBook(res));
    }, []);

    const onAddReview = (e) => {
        e.preventDefault();

        const { review } = e.target;

        let newReview = reviewsService.create(review.value, "")
            .then(res => {
                newReview = res;
                book.reviews.push(newReview)

                let bookId = match.params.bookId;

                booksService.update(bookId, book)
                    .then((res) => {
                        history.push(`/books/details/${bookId}`);
                        return;
                    });
            })
    }

    return (
        <main className="content-wrapper">
            <div className="form-container">
                <h1>Add Book Review</h1>
                <form onSubmit={onAddReview}>
                    <label htmlFor="review">Book review</label>
                    <textarea id="review" name="review" placeholder="Enter book review.."></textarea>

                    <input type="submit" value="Post Review" />
                </form>
            </div>
        </main>
    );
};

export default AddReview;