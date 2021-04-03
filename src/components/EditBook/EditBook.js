import { useEffect, useState } from 'react';
import * as booksService from '../../service/booksService';

const EditBook = ({
    match,
    history,
}) => {
    const [book, setBook] = useState({});
    //TODO errorMess

    useEffect(() => {
        booksService.getOne(match.params.bookId)
        .then(res => setBook(res));
    }, [])

    const onEditSaveSubmit = (e) => {
        e.preventDefault();

        let bookId = match.params.bookId;
        let updatedBook = {
            title: e.target.title.value,
            author: e.target.author.value,
            description: e.target.description.value,
            imageUrl: e.target.imageUrl.value,
            category: e.target.category.value,
            rating: book.rating,
            totalRating: book.totalRating,
            votes: book.votes
        };

        booksService.update(bookId, updatedBook)
        .then(() => {
            history.push(`/books/details/${bookId}`);
            return;
        });
    }
    return (
        <main className="content-wrapper">
            <div className="form-container">
                <h1>Edit Book</h1>
                <form onSubmit={onEditSaveSubmit}>
                    <label htmlFor="title" >Book Title</label>
                    <input type="text" id="title" name="title" placeholder="Enter book title.." defaultValue={book.title} />

                    <label htmlFor="author">Author name</label>
                    <input type="text" id="author" name="author" placeholder="Enter book author.." defaultValue={book.author}/>

                    <label htmlFor="description">Book description</label>
                    <textarea id="description" name="description" placeholder="Enter book description.." defaultValue={book.description}></textarea>

                    <label htmlFor="imageUrl">Image URL</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Enter image url.." defaultValue={book.imageUrl} />

                    <label htmlFor="category">Category</label>
                    <select id="category" name="category" defaultValue={book.category}>
                        <option value="action">Action</option>
                        <option value="drama">Drama</option>
                        <option value="horror">Horror</option>
                        <option value="fantasy">Fantasy</option>
                    </select>

                    <input type="submit" value="Save Book" />
                </form>
            </div>
        </main>
    );
};

export default EditBook;