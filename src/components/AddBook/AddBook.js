const AddBook = () => {
    return (
        <main className="content-wrapper">
            <div class="form-container">
                <h1>Add Book</h1>
                <form action="">
                    <label for="title">Book Title</label>
                    <input type="text" id="title" name="title" placeholder="Enter book title.." />

                    <label for="author">Author name</label>
                    <input type="text" id="author" name="author" placeholder="Enter book author.." />

                    <label for="description">Book description</label>
                    <textarea id="description" name="description" placeholder="Enter book description.."></textarea>

                    <label for="category">Category</label>
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