import React,{createContext, useState} from 'react'

export const AuthContext = createContext()
function AuthProvider(props) {
    // curren user information after login authentication
const [currentUser,SetCurrentUser] = useState(false)

  return (
    <AuthContext.Provider value={{currentUser}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
