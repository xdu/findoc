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
            <div className="card card-block bg-faded">
                <div>
                    <Title onClick={this.open}>{item.title}</Title>
                    <button className="btn btn-sm btn-default" onClick={this.open}>open</button>
                </div>
                <p>
                    {item.desc.split("\n").map(i => {
                        return <div>{i}</div>;
                    })}
                </p>
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