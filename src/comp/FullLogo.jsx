import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/shpe_logo_trans.png';
import './FullLogo.css';

function FullLogo() {
    return (<Link to="/" className="nav__logoholder" aria-label="Company home">
        <img src={logo} alt="Company logo" />
        <h1>University of South Carolina</h1>
    </Link>);
}

export default FullLogo; 