import './MyProfile.css';
import BookCard from '../BookCard/BookCard';

const MyProfile = () => {
    return (
        <main className="content-wrapper">
            <div className="my-profile-wrappper">
                <h1 className="my-profile-heading">My books</h1>
                <div className="book-cards-wrapper">
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </div>
            </div>
        </main>
    );
};

export default MyProfile;