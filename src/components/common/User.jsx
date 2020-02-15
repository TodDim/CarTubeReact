import React from "react"
import { Link } from "react-router-dom"
// import dateConvertor from './../utils/dateConvertor'
// import authService from "../utils/services/authService";

let User = (props) => {
    return (
        <div style={{'margin':'10px', 'height':'60px', 'width':'500px'}} className="listing">
            <p style={{'display':'inline-block'}}>Username: {props.username }</p>
            <div style={{'display':'inline-block', 'backgroundColor': 'red' }} id="data-buttons">
                {/* <ul> */}
                    <p className="action button-carDetails" style={{'display':'inline-block', 'backgroundColor': 'red' }}>
                        <Link to={`deleteUser/:${props._id}`}> Delete user   </Link>
                    </p>
                {/* </ul> */}
            </div>
        </div>

    )
}

export default User