import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
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
                        <form autoComplete='off'>
                            <div className="form-group mt-2">
                                <label htmlFor="email">Email</label>
                                <input type="email" id='email' className='form-control' required />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="paassword">Password</label>
                                <input type="paassword" name='paassword' id='paassword' className='form-control' required />
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
