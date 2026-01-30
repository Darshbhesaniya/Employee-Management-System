import React from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashBoard from './Components/DashBoard/EmployeeDashBoard'
import AdminDashBoard from './Components/DashBoard/AdminDashBoard'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from './Context/AuthProvider'
import { useEffect } from 'react'

const App = () => {

  // This usestate is use for setUser in login 
  const [user, setUser] = useState(null)

  // This is a loggedIn user data usestate
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  // This is contextdata used from authprovider
  const [userData,SetUserData] = useContext(AuthContext)

  


  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      console.log(userData);

      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])
  

  

  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin',}))
    }
     else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
    if(employee){
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
    } 
    }
    else {
      alert('INVALID CREDENTIALS')
    }
  }






  return (
    <div className='min-h-screen bg-black text-white'>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashBoard changeuser={setUser} /> : (user == 'employee'? <EmployeeDashBoard changeuser={setUser} data={loggedInUserData}/> : null) }
    </div>
  )
}

export default App