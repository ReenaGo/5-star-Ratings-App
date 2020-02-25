import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../Review/Review.css'

const outerStar = <FontAwesomeIcon icon={faStar} className="outerStar"/>
const innerStar = <FontAwesomeIcon icon={faStar} className="innerStar"/>


const ratingsMatrix = {
    0: [],
    1: [innerStar],
    2: [innerStar, innerStar],
    3: [innerStar, innerStar, innerStar],
    4: [innerStar, innerStar, innerStar, innerStar],
    5: [innerStar, innerStar, innerStar, innerStar, innerStar],
}

const ratingsMatrixBlank = [outerStar, outerStar, outerStar, outerStar, outerStar]


export default function Stars(props) {
    return (
            <div className="starsContainer">
                <div className="outerStarContainer"> {ratingsMatrixBlank}
                    <div className="innerStarContainer">{ratingsMatrix[props.ratings]}</div>
                </div>
            </div>
    )
}