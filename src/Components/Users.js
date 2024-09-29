import React, { useContext } from 'react';
import User from './User';
import { UsersContext } from '../context/UsersContext';

const Users = ({handleDeleteUser}) => {
    const {users, setUsers}= useContext(UsersContext);
    
    return (
        <section>
           {users.map(user => <User key={user.id} user={user} handleDeleteUser={handleDeleteUser} />)} 
        </section>
    );
};

export default Users;