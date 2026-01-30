import React, { createContext } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/LocalStorage'
import { useState } from 'react'
import { useEffect } from 'react'

// context created
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {


  // localStorage.clear()
  const [userData, setUserData] = useState(null)


  useEffect(() => {
    // This data is come from LocalStorage.jsx 
    setLocalStorage()
    // this is get data from localstorage.jsx file
    const {employees} = getLocalStorage()
    setUserData(employees)
  }, [])



  return (
    <div>
          {/* Context Provide */}
      <AuthContext.Provider value={[userData,setUserData]}>
        {children}
      </AuthContext.Provider>

    </div>
  )
}

export default AuthProvider