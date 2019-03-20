import React, {Component} from 'react';
import {NavLink} from "react-router-dom";


class Navigation extends Component {
    render() {
        return (
            <div className="Navigation">
                <ul>
                    <li>
                        <NavLink to="/">HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink to="/works">WORKS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">CONTACT</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navigation;