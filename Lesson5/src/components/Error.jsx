import React from 'react';
import { Link } from 'react-router-dom';

const Error = (props) => {
    return (
        <div className="error-wrapper">
            <p className="errorMessage">Ошибка 404: Данной страницы не существует</p>
            <Link to='/chat/1'>
                <input className="sendBtn" type="submit" value="Вернуться в чат"/>
            </Link>
        </div> 
    );
};

export default Error;