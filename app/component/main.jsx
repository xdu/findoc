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
import { Link, BrowserRouter, Route } from 'react-router-dom'
import About from './About'

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
        <BrowserRouter>
            <div className="row">
                <div className="col-sm-4">
                    <Menu></Menu>
                </div>
                <div className="col-sm-8">
                    <Route path="/reo" component={About} />
                    {rows}      
                </div>
            </div>
        </BrowserRouter>
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