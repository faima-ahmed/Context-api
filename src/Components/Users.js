import React, { useContext } from 'react';
import User from './User';
import { UsersContext } from '../context/UsersContext';

const Users = () => {
    const {users, setUsers}= useContext(UsersContext);

    return (
        <section>
           {users.map(user => <User key={user.id} user={user} />)} 
        </section>
    );
};

export default Users;