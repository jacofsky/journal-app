import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';


const LoginScreen = () => {
    return (
        <>
            <h3 className='auth__tittle'>Login</h3>

            <form>
                <div className="row">
                    <div>
                        <input className='w-100 mb-2 auth__input' type="text" placeholder='Email' name='email' />
                        <input className='w-100 mt-2 auth__input' type="password" placeholder='Password' name='password' />
                    </div>
                    <div className='justify-content-center d-flex mt-3'>
                        <button className="auth__button btn w-100" type="submit">Login <i className="bi bi-arrow-bar-right"></i></button>
                    </div>
                    
                </div>
                
                
                
                
                <div className='row my-2 d-flex pt-4 justify-content-center align-items-center  px-3'>
                    <hr className='col-5'/>
                    <p className='text-center col-1'>or</p>   
                    <hr className='col-5'/>
                </div>


                <div className="row d-flex aling-items-center pb-4">
                    <div className="col-6 text-center">
                        <button className='btn btn-outline-secondary'><i class="bi bi-google auth-media"></i></button>
                    </div>
                    <div className="col-6 text-center">
                        <button className='btn btn-outline-secondary'><i class="bi bi-facebook col-6 auth-media"></i></button>
                    </div>
                </div>

                <Link to="/auth/register" className='link'>
                    Create new account
                </Link>
                
            </form>
        </>
    )
}

export default LoginScreen
