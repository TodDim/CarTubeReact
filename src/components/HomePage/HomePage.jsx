import React, { Component } from "react"
// import UserStats from './../common/UserStats'
import CarList from "../common/CarList"
import carsService from '../utils/services/cars-service'
import usersService from '../utils/services/usersService'
import dateConvertor from './../utils/dateConvertor'
import NavMenu from "../common/NavMenu"
import { toast } from 'react-toastify'
import CreateCarForm from "../common/CreateCarForm";

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            cars: [],
        }
    }

    componentDidMount() {
        let username = localStorage.getItem('username')
        carsService.getAllCars().then((cars) => {
            this.setState({
                cars: cars,
                username: username
            })
        })
              

    }

    render() {
        return (
            <div>
                <NavMenu  username={localStorage.getItem('username')}/>
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

export default HomePage