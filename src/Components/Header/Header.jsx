import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='header-container'>

            <div>
                <h2>Opportunity <span className='title'>Hub</span></h2>
            </div>

            <div className='activeLink'>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/statistics' >Statistics</ActiveLink>
                <ActiveLink to='/applied-jobs' >Applied Jobs </ActiveLink>
                <ActiveLink to='/blog' >Blog </ActiveLink>
            </div>
            
            <div>
                <button>Start Applying</button>
            </div>


        </div>
    );
};

export default Header;