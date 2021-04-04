import { Component } from 'react';
import * as booksService from '../../service/booksService';

import './ReviewCard.css'

class ReviewCard extends Component {
    constructor(props) {
        super(props);
    }


    render() {

    return(
        <div className="review-card-wrapper">
            <h3>{ this.props.author }</h3>
            <p>{ this.props.content }</p>
        </div>
    );
};

}

export default ReviewCard;