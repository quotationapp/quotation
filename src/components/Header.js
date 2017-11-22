import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render () {

        if (this.isHome()) {

            return <header><h1>{this.props.title}</h1></header>;

        } else {

            return  (
                <header>
                    <h1><Link to="/">{this.props.title}</Link></h1>
                </header>
            )

        }
    }

    isHome() {
        return window.location.pathname === '/';
    }
}

export default Header;