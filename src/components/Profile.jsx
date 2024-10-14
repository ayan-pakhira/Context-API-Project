import React, {useContext} from 'react'
import UserContext from '../context/userContext'

function Profile() {
    const {user} = useContext(UserContext)
    //here we need to accept the context, which data has sent to the server
    //through the setUser, that needs to be accepted at some point.

    if(!user) return <div>please login</div>

    return <div>welcome {user.username}</div>
    
}

export default Profile