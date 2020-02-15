import React, { Component } from 'react'
import authService from '../utils/services/authService'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    onChangeHandler(ev) {
        let fieldName = ev.target.name
        let fieldValue = ev.target.value

        this.setState({ [fieldName]: fieldValue })
    }

    onSubmitHandler(ev) {
        ev.preventDefault()

        authService.login(this.state.username, this.state.password)
            .then((userInfo) => {
                authService.saveSession(userInfo)

                toast.success("Login successful.", {
                    position: toast.POSITION.BOTTOM_RIGHT
                })

                this.props.history.push('/cars/all')
            }).catch((reason) => {
                toast.error(reason.responseJSON.description, {
                    position: toast.POSITION.TOP_RIGHT
                })
            })
    }

    render() {
        return (
            <div>
                <form id="login" className="container" onSubmit={this.onSubmitHandler}>
                    <p>Username</p>
                    <input name="username" onChange={this.onChangeHandler} type="text" />
                    <p>Password</p>
                    <input name="password" onChange={this.onChangeHandler} type="password" />
                    <input className="registerbtn" value="Sign In" type="submit" />
                    <div className="container signin">
                    <Link to="/register">Register</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm

