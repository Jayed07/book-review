const url = "http://localhost:8080/api/reviews";

export const create  = (content, author) => {
    let review = {
        content: content,
        author: author,
    };

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(review)
        
    }).then(res => res.json())
    .catch(error => console.log(error));
};

