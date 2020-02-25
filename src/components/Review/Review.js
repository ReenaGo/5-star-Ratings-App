import React from 'react';
import Stars from '../Stars/Stars';
import './Review.css'

const getCurrentDate = ()=>{
    let newDate = new Date()
    let year = newDate.getFullYear()
    let date = newDate.getDate()
    let month = newDate.getMonth() +1

    return month + "/" + date + "/" + year
}


export default function Review(props) {
    return (
        <div className="reviewContainer">
            <div className="reviewTop">
                <div className="reviewTopLeft">  
                    <h3>{props.title}</h3>
                    <h6>by {props.name} on {getCurrentDate()} </h6>
                </div>  
                <div className="reviewTopRight">
                    <Stars ratings = {props.ratings}/>
                </div>
            </div>
            <p className="reviewBody">{props.body}</p>
        </div>
    )
}

