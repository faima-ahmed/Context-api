import React from 'react';

const NewUser = () => {
    return (
        <div>
            <h2>User Registration</h2>
            <form>
                <input type='text' name='username' />
                <button type='submit' >Add User</button>
            </form>
        </div>
    );
};

export default NewUser;