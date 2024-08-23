import UserContextProvider from './Context/UserContextProvider'
import Login from './Component/Login'
import Profile from './Component/Profile'

import './App.css'

function App() {
  

  return (
    <UserContextProvider>
    <h1> React with context Api </h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
