import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };

    render() {
        return <div className="header">
            <Link to="/profile" className="profileLink">
                <img src="../../dist/build/assets/profile.png" alt="profileLogo" width="40"/>{this.props.profile.name}
            </Link>
            <span className="header__chatName">Чат {this.props.chatId}</span>
        </div>
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    profile: chatReducer.profile,
});

export default connect(mapStateToProps)(Header);