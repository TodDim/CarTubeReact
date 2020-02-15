import React, { Component } from 'react'
import carsService from '../utils/services/cars-service'
import { toast } from 'react-toastify'
import NavMenu from './NavMenu'
import { Link } from "react-router-dom"
import authService from "../utils/services/authService";

class CarDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            description: '',
            brand: '',
            model: '',
            year: '',
            imageUrl: '',
            fuel: '',
            price: '',
            title: '',
            seller: ''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    componentDidMount() {
        let carId = this.props.match.params.id.substr(1)

        carsService.getCarById(carId)
            .then((data) => {
                this.setState({
                    id: carId,
                    description: data.description,
                    brand: data.brand,
                    model: data.model,
                    year: data.year,
                    imageUrl: data.imageUrl,
                    fuel: data.fuel,
                    price: Number(data.price),
                    title: data.title,
                    seller: data.seller
                })
            }).catch((reason) => {
                toast.error(reason.responseJSON.description, {
                    position: toast.POSITION.TOP_RIGHT
                })
            })
    }

    onChangeHandler(ev) {
        let fieldName = ev.target.name
        let fieldValue = ev.target.value

        this.setState({ [fieldName]: fieldValue })
    }

    onSubmitHandler(ev) {
    }

    render() {
        return (
            <div>
                <NavMenu username={localStorage.getItem('username')} />

                <div className="my-listing-details">

                    <p>{this.state.title}</p>
                    <img height="500px" src={this.state.imageUrl} />
                    <h2>{this.state.brand + ": " + this.state.model}</h2>
                    <div className="info">
                        <div id="data-info">
                            <h3>Description:
                            <p id="descriptionDetails"> {this.state.description}</p></h3>
                            <h3>Seller: {this.state.seller}</h3>
                            <h3>Fuel: {this.state.fuel}</h3>
                            <h3>Year: {this.state.year}</h3>
                            <h3>Price: {this.state.price}$</h3>
                        </div>
                        <div id="data-buttons">
                            <ul>

                                <li className="action button-carDetails" style={{ 'backgroundColor': 'orange' }} >
                                    {this.state.seller === localStorage.getItem('username') || authService.isAdmin() ? <Link to={`../editCar/:${this.state.id}`}>edit   </Link> : null}
                                </li>
                                <li className="action button-carDetails" style={{ 'backgroundColor': 'red' }}>
                                    {this.state.seller === localStorage.getItem('username') || authService.isAdmin() ? <Link to={`../deleteCar/:${this.state.id}`}>delete   </Link> : null}
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        )

    }
}

export default CarDetails