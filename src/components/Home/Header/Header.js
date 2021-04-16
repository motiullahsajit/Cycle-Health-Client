import React from 'react';
import './Header.css'
import Navbar from '../../common/Navbar/Navbar';

const Header = () => {
    return (
        <header className='header'>
            <Navbar />
            <div className="header-text container">
                <h1 className='heading-text'>
                    REVOLUTION BICYCLES
                    <br />
                    SERVICE &amp; REPAIR</h1>
                <p className='short-text'>We service all brands of bicycles, whether you need a minimum quick adjustment <br />
                 or a performance check, our trained mechanics will get you safely back out riding.</p>
            </div>
        </header>
    );
};

export default Header;