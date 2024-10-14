import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    //this is the point where finally we are using the context. in the UserContext
    //we had declared this, so that if we need any value to pass into a particular 
    //part of any component, we can do that easily. that is how we are getting rid of
    //props drilling.

    const handleSubmit = (e) => {
        e.preventDefault()//to prevent default behavior of events. as we know when we
        //submit the value that goes anywhere, we don't want that behavior.

        setUser({username, password})
        //now here we are finally using the context, just passing the value which is required
        //and at the place where it is required. 
        //here mainly we are sending the value to the place where it is required.
    }
    //above is the method of sending the data to the server, that is why we 
    //are using setUser method to holds the data which we needs to send.

  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'/>
        {"   "}
        <input type='text'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'/>

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login