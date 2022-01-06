import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { Link } from 'react-router-dom';
import validator from 'validator';


import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';


const RegisterScreen = () => {

    const dispatch = useDispatch()
    const {msgError} = useSelector( state => state.ui )

    useEffect(() => {
        dispatch(removeError())
    }, [])

    const {formValues, handleInputChange} = useForm({
        name: 'Pablin',
        email: 'Pablis@gmail.com',
        password: '123456',
        password2: '123456'
    })

    const {name, email, password, password2} = formValues;

    const handleRegister = (e) => {
        e.preventDefault()

        if(isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }
    }

    const isFormValid = () => {
        
        if (validator.isEmpty(name)) {
            dispatch(setError('Name is required'))

            return false
        } else if (!validator.isEmail(email)){
            dispatch(setError('Email is invalid'))


            return false 
        } else if (password !== password2 || password.length < 5 || password2.length < 5) {
            dispatch(setError('Password shold be at least 6 caracters and match each other'))

            return false 
        }

        dispatch(removeError())
        return true
    }

    return (
        <div className='animate__animated animate__fadeIn animate__faster'>
            <h3 className='auth__tittle'>Register</h3>
            
            {
                msgError 
                &&
                <div className="auth__alert-error my-2">
                    {msgError}
                </div>
            }
            

            <form onSubmit={handleRegister}>
                <div className="row mb-3">
                    <div>
                        <input className='w-100 mb-2 auth__input' type="text" placeholder='Name' name='name' onChange={handleInputChange} value={name} />
                        <input className='w-100 mb-2 auth__input' type="text" placeholder='Email' name='email' onChange={handleInputChange} value={email} />
                        <input className='w-100 mt-2 auth__input' type="password" placeholder='Password' name='password' onChange={handleInputChange} value={password} />
                        <input className='w-100 mt-2 auth__input' type="password" placeholder='Confirm password' name='password2' onChange={handleInputChange} value={password2} />
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
