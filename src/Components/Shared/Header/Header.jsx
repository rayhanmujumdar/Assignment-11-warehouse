import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='home'>Home</Link>
            <Link to='product'>product</Link>
        </div>
    );
};

export default Header;