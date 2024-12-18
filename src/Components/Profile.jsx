import React, { useContext } from 'react';
import  UserContext  from '../Context/Contextapi';  // Correctly importing UserContext

 function Profile() {
    const {user} = useContext(UserContext);  // Accessing user from the context
  
    if (!user) return <div>Please login</div>;
    
    return <div>Welcome: {user.username}</div>;  // Correctly displaying the username
}

export default Profile;
