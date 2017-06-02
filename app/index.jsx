import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import MainComponent from './component/main'

let store = createStore(reducers)

window.onload = function() {
    ReactDOM.render(
        <Provider store={store}>
            <MainComponent />
        </Provider>,
        document.getElementById('app'))
}