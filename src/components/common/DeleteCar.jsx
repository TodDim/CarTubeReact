import { Component } from 'react'
import carsService from '../utils/services/cars-service'
import { toast } from 'react-toastify'
// import authService from '../utils/services/authService';


class DeleteCar extends Component {
    componentDidMount() {
        let carId = this.props.match.params.id.substr(1)

        carsService.remove(carId)
            .then(() => {
                toast.info("Car deleted.", {
                    position: toast.POSITION.TOP_RIGHT
                })
                this.props.history.push(`cars/all`)

                // if (!authService.isAdmin()) {
                //     this.props.history.push(`/profile`)
                // }
            }).catch((reason) => {
                toast.error(reason.responseJSON.description, {
                    position: toast.POSITION.TOP_RIGHT
                })
            })
    }

    render() {
        return null
    }
}

export default DeleteCar