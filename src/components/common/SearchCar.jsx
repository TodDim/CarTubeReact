import React, { Component } from 'react'
import carsService from '../utils/services/cars-service'
import NavMenu from "../common/NavMenu"
import { toast } from 'react-toastify'

class SearchCarForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            brand: '',
            model: '',
            foundCars: []
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
        let brand = this.state.brand
        let model = this.state.model
        carsService.searchCars(brand, model)
            .then((foundCars) => {
                this.setState({
                    foundCars: foundCars
                })

                this.props.findCars(this.state.foundCars)
            }).catch((reason) => {
                toast.error(reason.responseJSON.description, {
                    position: toast.POSITION.TOP_RIGHT
                })
            })
    }

    render() {
        return (
            <div>
                <NavMenu username={localStorage.getItem('username')} />
                <form id="create-listing" className="chirp-form" onSubmit={this.onSubmitHandler}>
                    <div className="container">
                        <h1>Search Car</h1>

                        <p>Car Brand</p>
                        <input name="brand" type="text" onChange={this.onChangeHandler} placeholder="Enter Car Brand" name="brand" />

                        <p>Car Model</p>
                        <input name="model" type="text" onChange={this.onChangeHandler} placeholder="Enter Car Model" name="model" />

                        <hr />
                        <input className="registerbtn" value="Search car" type="submit" />
                    </div>
                </form>
            </div>

        )
    }
}

export default SearchCarForm