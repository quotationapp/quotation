import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SideMenu extends Component {

    constructor(props) {

        super(props);

        this.state = {
            menuEntries: [
                {name: 'about', path: '/about'},
                {name: 'privacy', path: '/privacy'},
                {name: 'terms', path: '/terms'},
            ]
        }
    }

    isActive(entry) {

        return window.location.pathname === entry.path ? 'current-page' : '';
    }

    render() {

        return (
            <nav className="col-xs-4 col-sm-1">
                <ul>
                    {
                        this.state.menuEntries.map((entry, key) => {
                            return (
                                <li key={key} className={this.isActive(entry)}>
                                    <Link to={entry.path}> {entry.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        );
    }
}

export default SideMenu;
