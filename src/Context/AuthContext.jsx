import React,{createContext, useEffect, useState} from 'react'
import { auth } from '../fireConfig'
import { onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext()
function AuthProvider(props) {
    // curren user information after login authentication
const [currentUser,setCurrentUser] = useState(false)

// current login user info
useEffect(() => {
  // invoke on mount
  const unsub = onAuthStateChanged(auth,user => {
    setCurrentUser(user)
  })

  return () => {
    unsub() // call on unmount
  }
},[])

  return (
    <AuthContext.Provider value={{currentUser}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
