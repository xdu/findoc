'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { 
    getWorldEconomicOutlook, 
    getGlobalFinacialStabilityReport,
    getFiscalMonitor,
    getRegionalEconomicReports
} from '../actions/imf'
import IMFPublication from './IMFPublication'

class MainComponent extends React.Component {

    constructor(props) {
        super(props)
        this.props.load()
    }

    render() {
        let rows = []
        for (var i = 0; i < this.props.articles.articles.length; i ++) {
            rows.push(
            <IMFPublication 
                item={this.props.articles.articles[i]} 
                key={i} />)
        }
        console.log(rows)

        return (
            <div>
                <div className="card card-block bg-faded">{this.props.articles.title}</div>
                {rows}      
            </div>
        )
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
        load: () => dispatch(getRegionalEconomicReports())
    }
}

export default connect(select, actions)(MainComponent)