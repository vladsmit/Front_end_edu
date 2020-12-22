import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };

    render() {
        return <div className="header">
            <Link to="/profile" className="profileLink">
                <img className="profileLogo" src="../../dist/build/assets/profile.png" alt="profileLogo" width="40"/>
            </Link>
            <span className="header__chatName">Чат {this.props.chatId}</span>
        </div>
    }
}