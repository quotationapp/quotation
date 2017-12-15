import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "quotation"
        }
    }

    render () {

        if (this.isHome()) {

            return <header><h1>{this.state.title}</h1></header>;

        } else {

            return  (
                <header>
                    <h1><Link to="/">{this.state.title}</Link></h1>
                </header>
            )

        }
    }

    isHome() {
        return window.location.pathname === '/';
    }
}

export default Header;