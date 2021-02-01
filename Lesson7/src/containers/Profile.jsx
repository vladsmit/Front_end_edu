import React, { useCallback } from 'react';
import { goBack } from 'connected-react-router';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';

const Profile = (props) => {
    const handleNavigate = useCallback(() => {
        props.goBack();
    }, []);

    return (
        <div className="profile--wrapper">
            <img src="../../dist/build/assets/avatar.png" alt="Avatar" width="185" height="185" />
            <div className="profile__infoBlock profile__infoBlock--margin">
                <p className="profile__info--margin">Имя: {props.profile.name}</p>
                <p className="profile__info--margin">Город: {props.profile.city}</p>
                <p className="profile__info--margin">Возраст: {props.profile.age}</p>
                <p className="profile__info--margin">Информация о себе: {props.profile.info}</p>
                <a onClick={() => handleNavigate()}>
                    <input className="sendBtn profile__btn--margin" type="submit" value="Вернуться в чат" />
                </a>
            </div>
        </div>
    );
};

Profile.propTypes = {
    profile: PropTypes.object,
    goBack: PropTypes.func.isRequired,
};

const mapStateToProps = ({ chatReducer }) => ({
    profile: chatReducer.profile,
});

const mapDispatchToProps = dispatch => bindActionCreators({ goBack }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);