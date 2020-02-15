import React, { Component } from "react"
import CarList from "../common/CarList"
// import dateConvertor from './../utils/dateConvertor'
import NavMenu from "../common/NavMenu"

class FoundCarsList extends Component {

    render() {
        return (
            <div>
                <NavMenu username={localStorage.getItem('username')} />
                <div id="car-listings">
                    <CarList cars={this.props.foundCars} />
                </div>
            </div>
        )
    }
}

export default FoundCarsList


