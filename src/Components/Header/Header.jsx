import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>

            <div>
                <h2>Opportunity <span className='title'>Hub</span></h2>
            </div>

            <div>
                <Link to='/'>Home</Link>
                <Link to='/statistics' >Statistics</Link>
                <Link to='/applied-jobs' >Applied Jobs </Link>
                <Link to='/blog' >Blog </Link>
            </div>
            
            <div>
                <button>Start Applying</button>
            </div>


        </div>
    );
};

export default Header;