import * as booksService from '../../service/booksService';

const AddBook = ({
    history,
}) => {

    const onCreateBookSubmitHandler = (e) => {
        e.preventDefault();

        const { title, author, description, imageUrl, category } = e.target;

        booksService.create(title.value, author.value, description.value, imageUrl.value, category.value)
        .then(() => {
            history.push('/');
        })
    };

    return (
        <main className="content-wrapper">
            <div className="form-container">
                <h1>Add Book</h1>
                <form onSubmit={onCreateBookSubmitHandler}>
                    <label htmlFor="title">Book Title</label>
                    <input type="text" id="title" name="title" placeholder="Enter book title.." />

                    <label htmlFor="author">Author name</label>
                    <input type="text" id="author" name="author" placeholder="Enter book author.." />

                    <label htmlFor="description">Book description</label>
                    <textarea id="description" name="description" placeholder="Enter book description.."></textarea>

                    <label htmlFor="imageUrl">Image URL</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Enter image url.." />

                    <label htmlFor="category">Category</label>
                    <select id="category" name="category">
                        <option value="action">Action</option>
                        <option value="drama">Drama</option>
                        <option value="horror">Horror</option>
                        <option value="fantasy">Fantasy</option>
                    </select>

                    <input type="submit" value="Add Book" />
                </form>
            </div>
        </main>
    );
};

export default AddBook;