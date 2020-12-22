import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default class Profile extends React.Component {
    render() {
        return (
            <div className="profileWrapper">
                <img className="profileImg" src="https://placehold.it/185x185" alt="Avatar" width="185" height="185"/>
                <div className="profileInfoBlock">
                    <p className="profileInfo">Имя: Влад</p>
                    <p className="profileInfo">Город: Москва</p>
                    <p className="profileInfo">Возраст: 32</p>
                    <p className="profileInfo">Информация о себе:</p>
                    <Link to="/chat/1">
                        <Button className="profileButton" variant="dark" type="button">Вернуться в чат</Button>
                    </Link>
                </div>
            </div>
        )
    }
}