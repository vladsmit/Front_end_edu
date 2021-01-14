import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';

const Profile = (props) => {
    return (
        <div className="profileWrapper">
            <img className="profileImg" src="https://placehold.it/185x185" alt="Avatar" width="185" height="185"/>
            <div className="profileInfoBlock">
                <p className="profileInfo">Имя: {props.profile.name}</p>
                <p className="profileInfo">Город: {props.profile.city}</p>
                <p className="profileInfo">Возраст: {props.profile.age}</p>
                <p className="profileInfo">Информация о себе: {props.profile.info}</p>
                <Link to="/chat/1">
                    <input className="sendBtn profileMargin" type="submit" value="Вернуться в чат"/>
                </Link>
            </div>
        </div>
    );
};

Profile.propTypes = {
    profile: PropTypes.object,
}

const mapStateToProps = ({ chatReducer }) => ({
    profile: chatReducer.profile,
});

export default connect(mapStateToProps)(Profile);