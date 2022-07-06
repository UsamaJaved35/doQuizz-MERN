import React from 'react'
import { useNavigate } from 'react-router-dom'
const Signup = (props) => {
    const navigate=useNavigate()
    const handleLogin=()=>
    {
        navigate(`/login${props.mode.toLowerCase()}`)
    }
  return (
    <div>
           <div className="container-fluid" style={{backgroundColor:"grey"}}>
            <div className="row h-100 align-items-center justify-content-center" style={{minHeight: '100vh'}}>
                <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div className="bg-dark rounded p-4 p-sm-5 my-4 mx-3">
                        <div className="d-flex align-items-center mb-3" style={{color:'lightgrey'}}>
                        <i className="fa-solid fa-user-pen mx-3"></i>
                            <h3 className='text-center'>Sign Up As {props.mode}</h3>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="username" placeholder="Username"/>
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" style={{color:'lightgrey'}} htmlFor="exampleCheck1">Check me out</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-danger py-3 w-100 mb-4">Sign In</button>
                        <p className="text-center mb-0" style={{color:'lightgrey'}} >Already have an Account? 
                        <a to="" className='mx-2' style={{color:'red',cursor:'pointer'}} onClick={handleLogin}>Log In</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup