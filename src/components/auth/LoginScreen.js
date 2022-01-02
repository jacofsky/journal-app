import React from 'react'
import {useDispatch} from 'react-redux'

import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { login, startLoginEmailPassword } from '../../actions/auth';


const LoginScreen = () => {

    const dispatch = useDispatch()

    const {formValues, handleInputChange } = useForm({
        email: 'aa@gmail.com',
        password: '1235314'
    })

    const {email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(email, password)
        dispatch(startLoginEmailPassword(email, password))
    }

    return (
        <>
            <h3 className='auth__tittle'>Login</h3>

            <form onSubmit={handleLogin}>
                <div className="row">
                    <div>
                        <input className='w-100 mb-2 auth__input' type="text" placeholder='Email' name='email' value={email} onChange={handleInputChange} />
                        <input className='w-100 mt-2 auth__input' type="password" placeholder='Password' name='password' value={password} onChange={handleInputChange} />
                    </div>
                    <div className='justify-content-center d-flex mt-3'>
                        <button className="auth__button btn w-100" type="submit">Login <i className="bi bi-arrow-bar-right"></i></button>
                    </div>
                    
                </div>
                
                
                
                
                <div className='my-4 d-flex justify-content-center align-items-center'>
                    <hr className='col-5'/>
                    <p className='text-center col-2'>or</p>   
                    <hr className='col-5'/>
                </div>


                <div className="d-flex justify-content-center pb-4">
                    <div className="text-center">
                        <button className='btn btn-outline-secondary'><i className="bi bi-google auth-media"></i></button>
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
