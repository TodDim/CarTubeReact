import React, { Component } from 'react'
import carsService from '../utils/services/cars-service'
import NavMenu from "../common/NavMenu"
import { toast } from 'react-toastify'

class CreateCarForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
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

        carsService.create(brand, description, fuel, imageUrl, model, price, seller, title, year)
            .then(() => {
                toast.info("Car published.", {
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
                <form id="create-listing" className="chirp-form" onSubmit={this.onSubmitHandler}>
                    <div className="container">
                        <h1>Create Car</h1>
                        <p>Please fill in this form to create an listing.</p>
                        <p>Title</p>
                        <input name="title" type="text" onChange={this.onChangeHandler} placeholder="Enter Title" name="title" />
                        <p>Description</p>
                        <textarea name="description" type="text" onChange={this.onChangeHandler} placeholder="Enter Description" name="description" />

                        <p>Car Brand</p>
                        <input name="brand" type="text" onChange={this.onChangeHandler} placeholder="Enter Car Brand" name="brand" />

                        <p>Car Model</p>
                        <input name="model" type="text" onChange={this.onChangeHandler} placeholder="Enter Car Model" name="model" />

                        <p>Car Year</p>
                        <input name="year" type="number" onChange={this.onChangeHandler} placeholder="Enter Car Year" name="year" />

                        <p>Car Image</p>
                        <input name="year" type="text" onChange={this.onChangeHandler} placeholder="Enter Car Image" name="imageUrl" />

                        <p>Car Fuel Type</p>
                        <input name="fuel" type="text" onChange={this.onChangeHandler} placeholder="Enter Car Fuel Type" name="fuel" />

                        <p>Car Price</p>
                        <input name="price" type="number" onChange={this.onChangeHandler} placeholder="Enter Car Price" name="price" />

                        <hr />
                        <input className="registerbtn" value="Create car" type="submit" />
                    </div>
                </form>
            </div>

        )
    }
}

export default CreateCarForm