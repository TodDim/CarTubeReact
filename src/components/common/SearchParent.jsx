import React, { Component } from 'react'
// import NavMenu from "../common/NavMenu"
import SearchCarForm from './SearchCar'
import FoundCarsList from './FoundCarsList'
// import { toast } from 'react-toastify'

class SearchParent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            foundCars: []
        }

        this.findCars = this.findCars.bind(this)
    }

    findCars(foundCars) {
        this.setState({
            foundCars: foundCars
        })
        return foundCars
    }

    render() {
        return (
            <div>
                {this.state.foundCars.length === 0 && <SearchCarForm findCars={this.findCars} />}
                {this.state.foundCars.length > 0 && <FoundCarsList foundCars={this.state.foundCars} />}
            </div>
        )
    }
}

export default SearchParent