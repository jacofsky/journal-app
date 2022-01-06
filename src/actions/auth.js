import Swal from 'sweetalert2'

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebase-config';
import {types} from '../types/types'
import { finishLoading, startLoading } from './ui';
import { logoutCleaning } from './notes';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch(startLoading())
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {      
                dispatch(login(user.uid, user.displayName))
                dispatch(finishLoading())
            })
            .catch(e =>{ 
                console.log(e) 
                dispatch(finishLoading())
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Check your email or password',
                    confirmButtonColor: '#5cc5bc'
                  })
            })
    
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {

        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({user}) => {
                await updateProfile(auth.currentUser, {displayName: name})
                
                dispatch(login(user.uid, user.displayName))
            })
            .catch (e => Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The email has already an account',
                confirmButtonColor: '#5cc5bc'
              }))
    
    }
}

export const startGoogleLogin = () => {
    
    return (dispatch) => {
        
        const auth = getAuth()
        signInWithPopup(auth, googleAuthProvider)
            .then(({user}) => {
                dispatch(login(user.uid, user.displayName))
            })
            
    }

}

export const login = (uid, displayName) => ({
        
    type: types.login,
    payload: {
        uid,
        displayName
    }
    
})

export const startLogout = () => {
    return async(dispatch) => {
        const auth = getAuth()
        await auth.signOut()

        dispatch(logout())
        dispatch(logoutCleaning())
    }
}

export const logout = () => ({
    
    type: types.logout

})