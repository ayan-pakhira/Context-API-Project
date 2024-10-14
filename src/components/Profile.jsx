import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    //here we need to accept the context, which data has sent to the server
    //through the setUser, that needs to be accepted at some point.
    //so in short words, setUser used for sending to the server, and user used 
    //for accepting those data.

    if(!user) return <div>please login</div>

    return <div>welcome {user.username}</div>
    //so just because of the useContext concepts, and with the help of the user and
    //setUser, we can accept the data here and print it in the webpage.
    
}

export default Profile