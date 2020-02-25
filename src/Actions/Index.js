import axios from 'axios';

export function loadReviews(){
    return(dispatch)=>{
        return axios.get('../../reviews.json')
        .then(res => {   
            dispatch(addReviews(res.data))
        })
    }
}

export function addReviews(reviews){
    return {
        type: "MOUNT_REVIEWS",
        payload: reviews
    }
}