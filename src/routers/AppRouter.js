import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { login } from '../actions/auth';
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';
import {PrivateRoute} from './PrivateRoute'
import {PublicRoute} from './PublicRoute'


const AppRouter = () => {

    const dispatch = useDispatch()

    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const auth = getAuth();
        auth.onAuthStateChanged((user) => {

            if(user?.uid ) {
                dispatch(login(user.uid, user.displayName))
                setIsLoggedIn(true)
            }else{
                setIsLoggedIn(false)
            }

            setChecking(false)

        })
    }, [dispatch, setChecking, setIsLoggedIn])

    if (checking) {
        return(
            <h1>Espere mientras cargamos la pagina</h1>
        )
    }


    return (
        <Router>
            <Switch>
                
                <PublicRoute isAuthenticated={isLoggedIn} path="/auth" component={AuthRouter} />
                    
                <PrivateRoute isAuthenticated={isLoggedIn} path="/" exact component={JournalScreen} />
                    
                <Redirect to="/auth/login"/>

            </Switch>
        </Router>
    )
}

export default AppRouter
