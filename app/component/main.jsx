'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { getWorldEconomicOutlook } from '../actions/imf'

class MainComponent extends React.Component {

    constructor(props) {
        super(props)
        this.props.load()
    }

    render() {
        return (<div className="card card-block bg-faded">{this.props.articles.title}</div>)
    }

}

const select = (state) => {
    console.log(state)

    return {
        articles: state.wb
    }
}

const actions = (dispatch) => {
    return {
        load: () => dispatch(getWorldEconomicOutlook())
    }
}

export default connect(select, actions)(MainComponent)