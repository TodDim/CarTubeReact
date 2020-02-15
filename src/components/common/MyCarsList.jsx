import React, { Component } from "react"
import CarList from "../common/CarList"
import carsService from '../utils/services/cars-service'
// import usersService from '../utils/services/usersService'
// import dateConvertor from './../utils/dateConvertor'
import NavMenu from "../common/NavMenu"
// import { toast } from 'react-toastify'

class MyCarsList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            cars: [],
        }
    }

    componentDidMount() {
        let username = localStorage.getItem('username')
        carsService.getMyCars(username).then((cars) => {
            this.setState({
                cars: cars,
                username: username
            })
        })

    }

    render() {
        return (
            <div>
                <NavMenu username={localStorage.getItem('username')} />
                <div id="car-listings">
                    <div id="listings">

                        {/* <UserStats {...this.state} /> */}
                    </div>

                    <CarList cars={this.state.cars} />
                </div>
            </div>

        )
    }
}

export default MyCarsList