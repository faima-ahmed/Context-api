import React from 'react';

const User = ({user}) => {
    const {id, username}= user;

    const handleDelete=(id) => {
        
    }

    return (
        <article>
            <h2>{id}</h2>
            <p>{username}</p>
            <button onClick={() =>{
                handleDelete(id);
            }}>
                Delete
            </button>
            
        </article>
    );
};

export default User;