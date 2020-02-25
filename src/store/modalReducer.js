const initialState = {
    showModal: false
  }




const reducer = (state = initialState, action) => {
    if(action.type==="DISPLAY_MODAL"){
        return {
            ...state,
            showModal: true
        }
    }
    if(action.type==="HIDE_MODAL"){
        return {
            ...state,
            showModal: false
        }
    }
    return state
}

export default reducer;