const AddRating = () => {
    return (
        <main className="content-wrapper">
            <div class="form-container">
                <h1>Add Book</h1>
                <form action="">

                    <label for="rating">Rating</label>
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