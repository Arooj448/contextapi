import React from "react";

const Usercard=(props)   => {
    return(
        <div className="user-card">
            <img className="user-img"></img>
            <h3>{props.data.name.first}</h3>
            <p>+{props.data.phone}</p>
            <p>{props.data.location.city}</p>

        </div>
    )
}
    export default Usercard;
    