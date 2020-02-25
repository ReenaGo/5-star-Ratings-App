import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './ReviewBar.css'


export default function ReviewBar() {
    const reviews = useSelector(state => state.reviewReducer.allReviews)
    const dispatch = useDispatch()

    const renderReviewsPerRatingsHandler = (numOfStars)=>{
                dispatch({type: "DISPLAY_SOME_REVIEWS", payload: numOfStars})
    }

    const reviewsPerStarsCount = [0,0,0,0,0];

    reviews.forEach(review=>{
        for(let i=0; i<5; i++){

            if(review.stars === i+1){
                reviewsPerStarsCount[i]++
            }
        }
        return reviewsPerStarsCount
    })

    const bars = reviewsPerStarsCount.map((count,index)=>{
        const barLength = (count/reviews.length)*100

        return <div className = "starBarContainer">
                    <div onClick={()=>renderReviewsPerRatingsHandler(index+1)}
                        className = "starCount">{index+1} 
                        star</div>
                    <div className = "barContainer" >
                        <div className = "bar" 
                            style= {{width: barLength + "%"}}></div>
                    </div>
                </div>
    })

    return (
        <div >
            {bars}
        </div>
    )
}
