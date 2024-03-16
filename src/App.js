import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Pnf from './Pages/Pnf'
import { ToastContainer } from 'react-toastify'
import Protected from './PrivateRoute/Protected'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={4000} position={"bottom-right"} />
        <Routes>
          {/* as a child */}
          {/* <Route path={'/'} element={
            <Protected>
              <Home/>
            </Protected>
          }/> */}
            
            <Route element={<Protected/>}>
              <Route path={'/'} element={<Home/>} />
            </Route>
            <Route path={'/login'} element={<Login/>} />
            <Route path={'/register'} element={<Register/>} />
            <Route path={'/*'} element={<Pnf/>} />
        </Routes>  
    </BrowserRouter>
  )
}

export default App
