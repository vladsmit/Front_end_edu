import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <div className="header">
            <Link to="/profile/" className="profileLink">
                <img src="../../dist/build/assets/profile.png" alt="profileLogo" width="40"/>Профиль
            </Link>
            <span className="header__chatName">Чат {props.chatId}</span>
        </div>
    );
};

Header.propTypes = {
    chatId: PropTypes.number.isRequired
}

export default Header;