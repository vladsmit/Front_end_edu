import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';

const Header = (props) => {
    return (
        <div className="header">
            <Link to="/profile/" className="profileLink">
    <img src="../../dist/build/assets/profile.png" alt="profileLogo" width="40"/>{props.profile.name}
            </Link>
    <span className="header__chatName">{props.chats[props.chatId].title}</span>
        </div>
    );
};

Header.propTypes = {
    profile: PropTypes.object,
    chats: PropTypes.object,
    chatId: PropTypes.number,
}

const mapStateToProps = ({ chatReducer }) => ({
    profile: chatReducer.profile,
    chats: chatReducer.chats,
});

export default connect(mapStateToProps)(Header);