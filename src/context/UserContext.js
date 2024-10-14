import React from 'react';

const UserContext = React.createContext()//this is required to create a context API.
//this is the part one.
//also this is a global function, whenever the code will be written inside the wrapper
//of UserContext, then those elements will have the access to this global function.

export default UserContext;