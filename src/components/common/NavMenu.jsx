import React, { Component } from "react"
import { NavLink } from 'react-router-dom'
import authService from "../utils/services/authService"

class NavMenu extends Component {
    render() {
        return (
            <nav className="active">
                <NavLink to="/cars/all" activeClassName="nav-active">Home</NavLink>
                <NavLink to="/cars/my" activeClassName="nav-active">My cars</NavLink>
                <NavLink to="/cars/search" activeClassName="nav-active">Search</NavLink>
                <NavLink to="/cars/create" activeClassName="nav-active">Create car</NavLink>
                {/* <NavLink to="/profile" activeClassName="nav-active">Me</NavLink> */}
                {authService.isAdmin() && <NavLink to="/admin" activeClassName="nav-active">Admin panel</NavLink>}
                <div id="profile">
                    <a>Welcome {this.props.username}</a>
                </div>
                <NavLink to="/logout">Logout</NavLink>
            </nav>
        )
    }
}

export default NavMenu