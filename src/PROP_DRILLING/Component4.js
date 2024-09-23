import React,{useContext} from 'react';
import { UserContext } from './UserContext';
function Component4() {
    const {user, text}=useContext(UserContext);
    console.log(user);
    return (
        <div>
            <h3>{user.id}</h3>
            <h3>{user.name}</h3>
            <h2>{text}</h2>
        </div>
    );
}

export default Component4;