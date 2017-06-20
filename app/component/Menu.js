'use strict'

import React from 'react'
import { Link } from 'react-router-dom'

class Menu extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link" to="/reo" >Regional Economic Outlook</Link>    
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">World Economic Outlook</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Global Financial Stability Report</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Fiscal Monitor</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Finance &amp; Development</a>
                </li>
            </ul>
        )
    }

}

export default Menu