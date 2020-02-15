import React from 'react'
import { Redirect } from 'react-router'
import authService from '../utils/services/authService'

let WelcomePage = () => {
    return authService.isAuth() ? <Redirect to="/cars/all" /> : <Redirect to="/login" />
}

export default WelcomePage