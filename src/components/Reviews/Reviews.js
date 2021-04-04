import { Component } from 'react';
import * as booksService from '../../service/booksService';

import ReviewCard from '../ReviewCard/ReviewCard';

class Reviews extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: []
        }
    }
    
    componentDidMount() {
        booksService.getOne(this.props.match.params.bookId)
        .then(res => this.setState({reviews: res.reviews})) 
    }


    render() {
    return (
        <main className="content-wrapper">
        <div className="reviews-section-wrapper">

        {this.state.reviews.length > 0 ?
        
        (this.state.reviews.map(x => 
            <ReviewCard key={x.id} {...x}/>
            )) : (<h1 className="books-page-heading centered">No reviews to show</h1>)}
        </div>
        </main>
    );
};
}

export default Reviews;