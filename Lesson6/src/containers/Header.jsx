import React, { useCallback } from 'react';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';

const Header = (props) => {
    const handleNavigate = useCallback(link => {
        props.push(link);
    }, []);

    return (
        <header className="mainHeader">
            <a className="mainHeader__profileLink" onClick={() => handleNavigate('/profile')}>
                <img src="../../dist/build/assets/profile.png" alt="profileLogo" width="40"/>{props.profile.name}
            </a>
            <span className="mainHeader__chatName mainHeader__chatName--margin">{props.chats[props.chatId].title}</span>
        </header>
    );
};

Header.propTypes = {
    profile: PropTypes.object,
    chats: PropTypes.object,
    chatId: PropTypes.number,
    push: PropTypes.func.isRequired,
};

const mapStateToProps = ({ chatReducer }) => ({
    profile: chatReducer.profile,
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);