import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Stars from '../Stars/Stars';
import ReviewBar from '../ReviewBar/ReviewBar'
import './SideBar.css'

export default function SideBar() {
    const reviews = useSelector(state=>state.reviewReducer.allReviews);
    const dispatch = useDispatch()
    const totalReviews = reviews.reduce((prev, current)=>{
        const currentRating = current.stars
        return prev + currentRating
    },0);

    const averageReviews = totalReviews/reviews.length

    const showAllReviewsHandler = ()=>{
        dispatch({type: "DISPLAY_ALL_REVIEWS"})
    }
    
    return (
        <div className="sideBar">
            <div className="image"></div>
            <h3>CUSTOMER REVIEWS</h3>
            <div className="sideBarStars">
                <Stars ratings={Math.round(averageReviews)}/>
                {console.log(averageReviews)}
                <div>{Math.round(averageReviews)} out of 5</div>
            </div>
            <div onClick={showAllReviewsHandler} className="totalReviews">{reviews.length} reviews</div>
            <ReviewBar/>

        </div>
    )
}
