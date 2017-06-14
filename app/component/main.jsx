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
import Menu from './Menu'

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
            <div className="row">
                <div className="col-sm-4">
                    <Menu></Menu>
                </div>
                <div className="col-sm-8">
                    {rows}      
                </div>
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