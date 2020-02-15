import React, { Component } from "react"
import User from './User'

class UsersList extends Component {
    render() {
        if (this.props.users) {
            return (
                <div >
                <h1>User Listings</h1>
                <h3 >
                    {this.props.users.map(user => {
                        return <User key={user._id} {...user} />
                    })}
                </h3>
                </div>
            )
        } else {
            return (
                <div className="no-cars" >
                    No users in database.
                </div>
            )
        }
    }
}

export default UsersList