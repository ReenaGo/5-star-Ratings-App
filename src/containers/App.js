import React from 'react';
import { connect } from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';
import Reviews from '../components/Reviews/Reviews';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import SideBar from '../components/SideBar/SideBar'
import axios from 'axios';
import './App.css'



const App = ()=>{
  const showModal = useSelector(state=>state.modalReducer.showModal)
  const dispatch = useDispatch()

  const startReviewHandler = () => {
    dispatch({type: "DISPLAY_MODAL"})
  }

  const handleCloseModal = () => {
    dispatch({type: "HIDE_MODAL"})
  }

  
    return (
      <div>
      <div className="blankNav"></div>
      <div className="container">
        <div className="sideBarContainer">
          <SideBar/>
        </div>
        <div className="contentContainer">
          <div>
            <h1>ROADIE COMMUNICATOR - INCLUDES INSTALLATION SOFTWARE</h1>
            <p>by <strong>Roadie</strong></p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              A fugit nobis optio quia soluta, hic earum laboriosam tempora 
              doloribus voluptates suscipit esse illo vero facere, iure fuga, 
              numquam aliquid odio?
              </p>
            <ul>
              <li>doloribus voluptates suscipit esse illo vero facere, iure fuga, 
              numquam aliquid odio?</li>
            </ul>
          </div>
          <div className="buttonContainer">
            <Button
              buttonType="solidBtn"
              clicked={startReviewHandler}>LEAVE A REVIEW
            </Button>
            <Button
              buttonType="whiteBtn">ADD TO CART
            </Button>
          </div>
          <Reviews
          />
         
          </div>
        </div>
        {showModal ?
            <Modal
              closeModal={handleCloseModal} /> : null}
        </div>
    )
  
}

const mapDispatchToProps = dispatch => {
  return {
    mountReviewsToStore: axios.get('../../reviews.json')
      .then(res => {
        dispatch({ type: 'MOUNT_REVIEWS', payload: res.data })
      })
  }
}

export default connect(null, mapDispatchToProps)(App)
