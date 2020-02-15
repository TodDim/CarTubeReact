import React, { Component } from "react"
import Car from './Car'

class CarsList extends Component {
    render() {
        if (this.props.cars) {
            return (
                <div id="car-listings" >
                    <h1>Car Listings</h1>
                    <div id="listings" >
                        {this.props.cars.map(car => {
                            return <Car key={car._id} {...car} />
                        })}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="no-cars" >
                    No cars in database.
                </div>
            )
        }
    }
}

export default CarsList