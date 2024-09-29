import React, { useState } from 'react';
import Users from './Components/Users';
import NewUser from './Components/NewUser';
import { UsersContext } from './context/UsersContext';


function App(props) {
  const [users, setUsers] = useState([
    {id:1, username: 'Faima'},
    {id:2, username: 'Diya'},
  ]);

  const handleDeleteUser=(id) =>{
    const filterUsers= 
      users.filter((user)=> user.id !== id )  
      setUsers(filterUsers);             
  }

  const handleAddNewUser= (newUser)=>{
    setUsers((prevUsers) => [...prevUsers, newUser]);
  }

  return (
    <UsersContext.Provider value={{users, setUsers}}>
      <NewUser handleAddNewUser={handleAddNewUser}/>
      <Users handleDeleteUser={handleDeleteUser}/>
    </UsersContext.Provider>
  );
}

export default App;