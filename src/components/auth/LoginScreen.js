import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';


const LoginScreen = () => {

    const dispatch = useDispatch()
    const {loading, msgError} = useSelector(state => state.ui)

    useEffect(() => {
        dispatch(removeError())
    }, [])

    const {formValues, handleInputChange } = useForm({
        email: 'Pablis@gmail.com',
        password: '123456'
    })

    const {email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault()
        if(isFormValid()) {
            dispatch(startLoginEmailPassword(email, password))
        }

    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
        
    }

    const isFormValid = () => {
        
        

        if (!validator.isEmail(email)){
            dispatch(setError('Email is invalid'))


            return false 
        } else if (validator.isEmpty(password)) {
            dispatch(setError('Password is required'))

            return false
        }

        dispatch(removeError())
        return true
    }

    return (
        <div className='animate__animated animate__fadeIn animate__faster'>


            <h3 className='auth__tittle'>Login</h3>

            {
                msgError 
                &&
                <div className="auth__alert-error my-2">
                    {msgError}
                </div>
            }

            <form onSubmit={handleLogin}>
                <div className="row">
                    <div>
                        <input className='w-100 mb-2 auth__input' type="text" placeholder='Email' name='email' value={email} onChange={handleInputChange} />
                        <input className='w-100 mt-2 auth__input' type="password" placeholder='Password' name='password' value={password} onChange={handleInputChange} />
                    </div>
                    <div className='justify-content-center d-flex mt-3'>
                        <button className="auth__button btn w-100 justify-content-center d-flex" type="submit" disabled={loading}>
                            {
                            
                            loading 
                            ? 
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div> 
                            : 
                            <p>Login <i className="bi bi-arrow-bar-right"></i></p> 
                            
                            } 
                        </button>
                    </div>
                    
                </div>
            </form>
                
                
                
                
            <div className='my-4 d-flex justify-content-center align-items-center'>
                <hr className='col-5'/>
                <p className='text-center col-2'>or</p>   
                <hr className='col-5'/>
            </div>


            <div className="d-flex justify-content-center pb-4">
                <div className="text-center">
                    <button onClick={handleGoogleLogin} className='btn btn-outline-secondary'><i className="bi bi-google auth-media"></i></button>
                </div>
            </div>

            <Link to="/auth/register" className='link'>
                Create new account
            </Link>
                
        </div>
    )
}

export default LoginScreen
