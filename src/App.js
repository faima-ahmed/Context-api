import React, { useState } from 'react';
import Users from './Components/Users';
import NewUser from './Components/NewUser';
import { UsersContext } from './context/UsersContext';


function App(props) {
  const [users, setUsers] = useState([
    {id:1, username: 'Faima'},
    {id:2, username: 'Diya'},
  ]);

  const handleAddNewUser= (newUser)=>{
    setUsers((prevUsers) => [...prevUsers, newUser]);
  }

  return (
    <UsersContext.Provider value={{users, setUsers}}>
      <NewUser handleAddNewUser={handleAddNewUser}/>
      <Users />
    </UsersContext.Provider>
  );
}

export default App;