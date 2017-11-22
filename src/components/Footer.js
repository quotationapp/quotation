import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer>
                <ul>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                    <li>
                        <Link to="/privacy">privacy</Link>
                    </li>
                    <li>
                        <Link to="/terms">terms</Link>
                    </li>
                </ul>
            </footer>
        );
    }
}

export default Footer;
