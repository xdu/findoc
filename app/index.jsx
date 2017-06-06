import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import MainComponent from './component/main'

window.onload = function() {

    const store = createStore(
        reducers,
        applyMiddleware(thunk)) 
    
    ReactDOM.render(
        <Provider store={store}><MainComponent /></Provider>,
        document.getElementById('app'))
}