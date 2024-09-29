import React, { useState } from 'react';
import Users from './Components/Users';
import NewUser from './Components/NewUser';


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

  return (
    <div>
      <NewUser/>
      <Users users={users} handleDeleteUser={handleDeleteUser}/>
    </div>
  );
}

export default App;