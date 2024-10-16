import { useState } from 'react'
import UserContextProvider from './context/UserContext.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Context API with React</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
