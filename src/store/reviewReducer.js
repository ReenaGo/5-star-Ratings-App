const initialState = {
    allReviews: []
}



const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'MOUNT_REVIEWS':
            return {
                ...state,
                allReviews: action.payload
            };

        case "ADD_NEW_REVIEW":
            return {
                ...state,
                allReviews: [...state.allReviews, action.payload]
            };
        
        case "DISPLAY_SOME_REVIEWS":
            let displaySomeReviews = state.allReviews.map((review)=>{
                if(review.stars===action.payload){
                    review.show = true
                }else{
                    review.show = false
                }
                return review
            })
            return {
                ...state,
                allReviews: displaySomeReviews
    
            };
        case "DISPLAY_ALL_REVIEWS":
            let displayAllReviews = state.allReviews.map((review)=>{
                review.show = true
                return review
            })

            return {
                ...state,
                allReviews: displayAllReviews
            }
        
    }
    return state
    
}

export default reducer;