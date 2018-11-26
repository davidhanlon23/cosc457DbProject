import React from 'react';
import Menu from './menu';

const Header = () => {
    return (
        <header>
            <div class="title">
                <h1>COSC 484 - Web Apps & JavaScript</h1>
            </div>
            <div class="sub-title">
                <Menu tagline ="Summer 2018: Classwork / Exercises"/>
                
               
                <div className="clearfix"></div>
                
            </div>
        </header>
    );
};

export default Header;