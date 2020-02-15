import React, { Component } from 'react'
import carsService from '../utils/services/cars-service'
import { toast } from 'react-toastify'
import NavMenu from './NavMenu'


class EditCar extends Component {
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
        ev.preventDefault()

        let description = this.state.description
        let title = this.state.title
        let brand = this.state.brand
        let model = this.state.model
        let year = this.state.year
        let imageUrl = this.state.imageUrl
        let fuel = this.state.fuel
        let price = this.state.price
        let seller = localStorage.getItem('username')

        if (description.length === 0 || brand.length === 0 || model.length === 0
            || year.length === 0 || imageUrl.length === 0 || fuel.length === 0
            || price.length === 0 || title.length === 0) {
            toast.warn("Cannot be empty!", {
                position: toast.POSITION.TOP_RIGHT
            })

            return
        }

        if (description.length > 150) {
            toast.warn("description text cannot be longer than 150 characters!", {
                position: toast.POSITION.TOP_RIGHT
            })

            return
        }


        carsService.edit(this.state.id, brand, description, fuel, imageUrl, model, price, seller, title, year)
            .then(() => {
                toast.info("Car edited", {
                    position: toast.POSITION.TOP_RIGHT
                })
                this.props.history.push('/cars/all')

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
                <form id="edit-listing" className="submitForm" onSubmit={this.onSubmitHandler}>
                    <div className="container">
                        <h1>Edit Car</h1>
                        <p>Please fill in this form to edit a listing.</p>
                        <p>Title</p>
                        <input name="title" type="text" value={this.state.title} onChange={this.onChangeHandler} placeholder="Enter Title" name="title" />
                        <p>Description</p>
                        <textarea name="description" type="text" value={this.state.description} onChange={this.onChangeHandler} placeholder="Enter Description" name="description" />

                        <p>Car Brand</p>
                        <input name="brand" type="text" value={this.state.brand} onChange={this.onChangeHandler} placeholder="Enter Car Brand" name="brand" />

                        <p>Car Model</p>
                        <input name="model" type="text" value={this.state.model} onChange={this.onChangeHandler} placeholder="Enter Car Model" name="model" />

                        <p>Car Year</p>
                        <input name="year" type="number" value={this.state.year} onChange={this.onChangeHandler} placeholder="Enter Car Year" name="year" />

                        <p>Car Image</p>
                        <input name="year" type="text" value={this.state.imageUrl} onChange={this.onChangeHandler} placeholder="Enter Car Image" name="imageUrl" />

                        <p>Car Fuel Type</p>
                        <input name="fuel" type="text" value={this.state.fuel} onChange={this.onChangeHandler} placeholder="Enter Car Fuel Type" name="fuel" />

                        <p>Car Price</p>
                        <input name="price" type="number" value={this.state.price} onChange={this.onChangeHandler} placeholder="Enter Car Price" name="price" />

                        <hr />
                        <input className="registerbtn" value="Edit car" type="submit" />
                    </div>
                </form>
            </div>

        )
    }
}

export default EditCar