import React, { Component } from "react"
import NavMenu from "../common/NavMenu"
import { toast } from 'react-toastify'
import usersService from "../utils/services/usersService";
import UsersList from "../common/UserList";

class MainAdminPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'All users',
            users: []
        }
    }

    componentDidMount() {
        usersService.loadAllUsers()
            .then(users => {
                this.setState({ users: users })
            }).catch((reason) => {
                toast.error(reason.responseJSON.description, {
                    position: toast.POSITION.TOP_RIGHT
                })
            })
    }

    render() {
        return (
            <div>
                <NavMenu />
                <div className="content">
                    <UsersList {...this.state} />
                </div>
            </div>

        )
    }
}

export default MainAdminPage