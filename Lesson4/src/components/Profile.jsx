import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Profile = (props) => {
    const [profile, setProfile] = useState({ name: 'Влад', city: 'Москва', age: 32, info: '' });

    return (
        <div className="profileWrapper">
            <img className="profileImg" src="https://placehold.it/185x185" alt="Avatar" width="185" height="185" />
            <div className="profileInfoBlock">
                <p className="profileInfo">Имя: {profile.name}</p>
                <p className="profileInfo">Город: {profile.city}</p>
                <p className="profileInfo">Возраст: {profile.age}</p>
                <p className="profileInfo">Информация о себе: {profile.info}</p>
                <Link to="/chat/1">
                    <input className="sendBtn profileMargin" type="submit" value="Вернуться в чат" />
                </Link>
            </div>
        </div>
    );
};

Profile.propTypes = {
    profile: PropTypes.object,
}

export default Profile;