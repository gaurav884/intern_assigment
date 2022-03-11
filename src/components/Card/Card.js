import React from 'react'
import "./card.css"
const Card = (props) => {
 
    return (

        
        <div className="user-card-container">
            <div className="img-info-container">
                <div className="img-container">
                    {props.userData&& <img src={props.userData.avatar} alt={props.userData.first_name}/>}
                </div>
                <div className="info-container">
                    <div className="sub-info-container">
                        <label>First Name </label>  
                        <span> {props.userData ? props.userData.first_name:null}</span>
                    </div>
                    <div className="sub-info-container">
                    <label>Last Name </label> 
                        <span> {props.userData ? props.userData.last_name:null}</span>
                    </div>
                    <div className="sub-info-container">
                        <label>Email </label> 
                        <span> {props.userData ? props.userData.email:null}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card