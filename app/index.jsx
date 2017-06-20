import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainComponent from './component/main'

window.onload = function() {

    const store = createStore(
        reducers,
        applyMiddleware(thunk)) 
    
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <Route path="/" component={MainComponent} />
            </Router>
        </Provider>,
        document.getElementById('app'))
}