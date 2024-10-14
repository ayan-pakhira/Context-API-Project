import React, {useState} from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider


//children is sort of props here.
//and this file is the "UserContext provider".
//this file has to be jsx as this has to work as tags or attribute as like used in react,
//so that it wraps the elements and gives access of global functions.
//so it will provide and have access of the global functions, but to give something in
//return we need to provide data first, so as an example "user, setUser" is data
//by considering that we are going to create a login page, where these data are important
//now to give these values to the Provider we have a property which we can use for UserContext
//that is "VALUE" 