import React from 'react';

const Comment = (props) => {
    const {name,email,body} = props.comment;
    return (
        <div>
            <h4>Name: {name}</h4>
            <h6>Email: {email}</h6>
            <p>{body}</p>
        </div>
    );
};

export default Comment;