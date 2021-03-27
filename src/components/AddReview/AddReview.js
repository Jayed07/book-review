const AddReview = () => {
    return (
        <main class="content-wrapper">
            <div class="form-container">
                <h1>Add Book Review</h1>
                <form action="">
                <label for="review">Book review</label>
                    <textarea id="review" name="review" placeholder="Enter book review.."></textarea>

                    <input type="submit" value="Post Review" />
                </form>
            </div>
        </main>
    );
};

export default AddReview;