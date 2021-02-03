import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';

const Error = (props) => {
    const handleNavigate = useCallback((link) => {
        props.push(link);
    }, []);

    return (
        <div className="error--wrapper">
            <p className="error__message">Ошибка 404: Данной страницы не существует</p>
            <a onClick={() => handleNavigate('/chat/1')}>
                <input className="sendBtn" type="submit" value="Вернуться в чат"/>
            </a>
        </div> 
    );
};

Error.propTypes = {
    push: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);

export default connect(null, mapDispatchToProps)(Error);