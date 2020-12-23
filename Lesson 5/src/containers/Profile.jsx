import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

class Profile extends React.Component {
    render() {
        return (
            <div className="profileWrapper">
                <img className="profileImg" src="https://placehold.it/185x185" alt="Avatar" width="185" height="185" />
                <div className="profileInfoBlock">
                    <p className="profileInfo">Имя: {this.props.profile.name}</p>
                    <p className="profileInfo">Город: {this.props.profile.city}</p>
                    <p className="profileInfo">Возраст: {this.props.profile.age}</p>
                    <p className="profileInfo">Информация о себе: {this.props.profile.info}</p>
                    <Link to="/chat/1">
                        <Button className="profileButton" variant="dark" type="button">Вернуться в чат</Button>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    profile: chatReducer.profile,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);