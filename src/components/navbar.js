import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <div>
                <Link to="/" className="logo"><h1>Booking Flight App</h1></Link>
                </div>             
                <div>
                    <ul>
                        <li><Link to="/" className="link">Home</Link></li>
                        <li><Link to="/Hotel" className="link">Hotel</Link></li>
                        <li><Link to="/Car" className="link">Car</Link></li>
                        
                    </ul>
                </div>
            </nav>
        )
    }
}