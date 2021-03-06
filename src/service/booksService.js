import {auth} from '../utils/firebase';

// let user = auth.getCurrentUser();
// let user = auth.getInstance().getCurrentUser()

// console.log(user)

const url = "http://localhost:8080/api/books";

export const deleteOne = (bookId) => {
    return fetch(`${url}/${bookId}`, {
        method: 'DELETE',
      })
    .then(res => res.json())
    .catch(error => console.log(error));
};

export const getAll = (category = '') => {
    let booksUrl = url + ((category && category !== 'all') ? `/${category}` : '');

    return fetch(booksUrl)
        .then(res => res.json())
        .catch(error => console.log(error));
};

export const getOne = (bookId) => {
    return fetch(`${url}/${bookId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
};

export const create  = (title, author, description, imageUrl, category) => {

    let book = {
        title: title,
        author: author,
        description: description,
        imageUrl: imageUrl,
        category: category,
        rating: 0,
        votes: 0,
    };

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book)
    });
};

export const update = (bookId, book) => {
    return fetch(`${url}/${bookId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book)
    });
};


export const updateRating = (bookId, rating, votes) => {
    return fetch(`${url}/${bookId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({rating, votes})
    })
        .then(res => res.json());
};
