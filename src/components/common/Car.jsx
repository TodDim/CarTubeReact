import React from "react"
import { Link } from "react-router-dom"
// import dateConvertor from './../utils/dateConvertor'
import authService from "../utils/services/authService";

let Car = (props) => {
    return (
        <div className="listing">
            <p>{props.title}</p>
            <img src={props.imageUrl} />
            <h2>Brand: {props.brand}</h2>
            <div className="info">
                <div id="data-info">
                    <h3>Seller: {props.seller}</h3>
                    <h3>Fuel: {props.fuel}</h3>
                    <h3>Year: {props.year}</h3>
                    <h3>Price: {props.price}$</h3>
                </div>
                <div id="data-buttons">
                    <ul>
                        <li className="action">
                            <Link to={`details/:${props._id}`} className="button-carDetails">Details</Link>
                        </li>
                        <li className="action button-carDetails" style={{ 'backgroundColor': 'orange' }} >
                            {props.isAuthor || authService.isAdmin() ? <Link to={`editCar/:${props._id}`}>edit   </Link> : null}
                        </li>
                        <li className="action button-carDetails" style={{ 'backgroundColor': 'red' }}>
                            {props.isAuthor || authService.isAdmin() ? <Link to={`deleteCar/:${props._id}`}>delete   </Link> : null}
                        </li>

                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Car