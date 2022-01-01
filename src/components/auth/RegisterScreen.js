import React from 'react'
import { Link } from 'react-router-dom';


const RegisterScreen = () => {
    return (
        <div>
            <h3 className='auth__tittle'>Register</h3>

            <form>
                <div className="row mb-3">
                    <div>
                        <input className='w-100 mb-2 auth__input' type="text" placeholder='Name' name='name' />
                        <input className='w-100 mb-2 auth__input' type="text" placeholder='Email' name='email' />
                        <input className='w-100 mt-2 auth__input' type="password" placeholder='Password' name='password' />
                        <input className='w-100 mt-2 auth__input' type="password" placeholder='Confirm password' name='password2' />
                    </div>
                    <div className='justify-content-center d-flex mt-3'>
                        <button className="auth__button btn w-100" type="submit">Register <i className="bi bi-arrow-bar-right"></i></button>
                    </div>
                    
                </div>

                <Link to="/auth/login" className='link'>
                    Already registered?
                </Link>
                
            </form>
        </div>
    )
}

export default RegisterScreen
