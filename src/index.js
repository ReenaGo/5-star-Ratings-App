import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import reviewReducer from './store/reviewReducer';
import modalReducer from './store/modalReducer';


const rootReducer = combineReducers({
    reviewReducer: reviewReducer,
    form: formReducer,
    modalReducer: modalReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
