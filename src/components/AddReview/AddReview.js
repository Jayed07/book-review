import * as booksService from '../../service/booksService';
import * as reviewsService from '../../service/reviewsService';
import InputError from '../../Shared/InputError/InputError';
import { useEffect, useState } from 'react';

const AddReview = ({
    match,
    history,
}) => {
    let [book, setBook] = useState({});
    const [errorMessage, setErrorMessage] = useState('');


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
    };

    const onFieldChangeHandler = (e) => {
        if (e.target.value.length < 10) {
            setErrorMessage('Review content must be at least 10 characters.');
        } else {
            setErrorMessage('');
        }
    };

    return (
        <main className="content-wrapper">
            <div className="form-container">
                <h1>Add Book Review</h1>
                <form onSubmit={onAddReview}>
                    <label htmlFor="review">Book review</label>
                    <textarea id="review" name="review" placeholder="Enter book review.." required minLength="10" onBlur={onFieldChangeHandler}></textarea>
                    <InputError>{errorMessage}</InputError>
                    <input type="submit" value="Post Review" />
                </form>
            </div>
        </main>
    );
};

export default AddReview;