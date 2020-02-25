import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Field, reduxForm, SubmissionError} from 'redux-form';
import './Modal.css';
import Button from '../Button/Button'

const Modal = props => {

  

  const { handleSubmit, pristine, submitting } = props

  const reviews = useSelector(state => state.reviewReducer.allReviews);
  const dispatch = useDispatch();

 

  const submit = ({name="", rating, reviewTitle="", reviewBody=""}) => {

    let error = {}
    let isError = false;


    if(name.trim()===""){
      error.name = 'Required'
      isError = true
    }
    if(reviewTitle.trim()===""){
      error.reviewTitle = 'Required'
      isError = true
    }
    if(reviewBody.trim()===""){
      error.reviewBody = 'Required'
      isError = true
    }
    if(isError){
      throw new SubmissionError(error)
    }else{
      isError = false

      const nextId = reviews.reduce((prev, curr) => {
        if (prev > curr.id) {
          return prev
        } else {
          return prev + 1
        }
      }, 0) + 1
      let newReview = {
        id: nextId,
        reviewerName: name,
        stars: parseInt(rating),
        title: reviewTitle,
        body: reviewBody,
        show: true
      }

      dispatch({ type: 'ADD_NEW_REVIEW', payload: newReview })
      props.closeModal()
    }
  }


const renderInputField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => {
  return (<div className = "inputSection">
    <label>{label}</label>
    <div>
      <input {...input} placeholder="Enter text here" type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)}

const renderTextAreaField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea {...input} placeholder="Enter text here" type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)


const renderSelectField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className = "inputSection">
    <label>{label}</label>
    <div>
      <select {...input} placeholder={label} type={type}>
                <option value={1} >one star</option>
                <option value={2}>two stars</option>
                <option value={3}>three stars</option>
                <option value={4}>four stars</option>
                <option value={5}>five stars</option>
      </select>
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className = "x" onClick={props.closeModal}>+</div>
        <h1 className="addReviewHeader">ADD REVIEW</h1>
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <Field 
              name="rating" 
              type="select-multiple"
              component={renderSelectField} 
              label="Rating">
            </Field>
          </div>
          <div>
            <Field 
              name="name" 
              type="text"
              component={renderInputField}
              label="Your Name"
            />
          </div>
          <div>
            <Field 
              name="reviewTitle" 
              type="text"
              component={renderInputField}
              label="Rating Title"
            />
          </div>
          <div>
            <Field 
              name="reviewBody" 
              type="text"
              component={renderTextAreaField} 
              label="Write your review below"
              />
          </div>
          <div className="buttonDiv">
            <Button  buttonType = "whiteBtn" type="button"  clicked={props.closeModal}>
              Cancel
            </Button>
            <Button buttonType = "solidBtn" type="submit" disabled={pristine || submitting} >Submit</Button>
          </div>
        </form>
      </div>
    </div>
  )
}


const revModal = reduxForm({
  form: 'addReview',
})(Modal)



export default revModal


