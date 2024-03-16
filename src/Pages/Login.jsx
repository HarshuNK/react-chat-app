import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {
    const[user,setUser] = useState({
        email:'',
        password:''
    })

    // input handler
    const readValue = (e) =>{
        const{name,value} = e.target
        console.log('name=',name, 'value=',value)
        setUser({...user , [name]:value})
    }

    // submitHandler
    const submitHandler = async (e) => {
        try {
            e.preventDefault()
            console.log(`user = `,user)
        } catch(err) {
            toast.error(err.message)
        }
    }

  return (
    <section id="hero" className='d-flex align-items-center justify-content-center'>
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-sm-12">
                <div className="card">
                    <div className="card-header bg-dark">
                        <h6 className="display-6 text-center text-success">Login Here</h6>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <form autoComplete='off' onSubmit={submitHandler}>
                            <div className="form-group mt-2">
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' id='email' value={user.email} onChange={readValue}  className='form-control' required />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="paassword">Password</label>
                                <input type="password" name='password' id='password'
                                value={user.password} onChange={readValue} className='form-control' required />
                            </div>
                            <div className="form-group mt-2">
                                <input type="submit" value='Login' className='btn btn-primary' required />
                            </div>

                        </form>
                    </div>

                    <div className="card-footer">
                        <Link to={"/register"}  className="btn btn-link" >New User? Register Here</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Login
