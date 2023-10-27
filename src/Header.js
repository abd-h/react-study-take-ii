import React from 'react';

import './Header.css';
import logo from './assets/logo.png';

const Header = (props) => {
    return (
        <div>
            <header>
                <img src={logo} alt="Art" />
                <h1>REacT aRT</h1>
                <p>A Community of Art lovers</p>
            </header>
        </div>
    )
}

export default Header;