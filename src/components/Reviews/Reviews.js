import React from 'react';
import { useSelector} from 'react-redux'
import Review from '../Review/Review';
import './Reviews.css'




const Reviews = (props)=>{
  const reviews = useSelector(state=>state.reviewReducer.allReviews)
    return (
      <div className="reviewsContainer">
          {reviews.map((review)=>(
            review.show ?
        <Review name={review.reviewerName}
                title={review.title}
                ratings={review.stars}
                body={review.body}
                key={review.id}
                /> : null
        ))}
      </div>
    )
}


export default Reviews






