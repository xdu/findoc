'use strict'
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
const {shell} = require('electron')

const Title = styled.text`
    font-size: 1.2em;
    text-align: center;
    color: palevioletred;
`

const base = 'http://www.imf.org'

class IMFPublication extends React.Component {

    constructor(props) {
        super(props)
        this.open = this._open.bind(this)
    }

    render() {
        const item = this.props.item
        return (
            <div>
                <p><button onClick={this.open}>link</button></p>
                <Title>{item.title}</Title>
                <p>{item.desc}</p>
            </div>
        )
    }

    _open() {
        let url = base + this.props.item.link;
        console.log("open " + url)
        shell.openExternal(url);
    }
}

IMFPublication.propTypes = {
    item: PropTypes.any
}

export default IMFPublication