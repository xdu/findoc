'use strict'

import React from 'react';

class About extends React.Component {

    render() {

        const { match, location, history } = this.props

        return (
            <div>
                <p> About page </p>
                <p>{JSON.stringify(match)}</p>
            </div>
        )
    }

}

export default About