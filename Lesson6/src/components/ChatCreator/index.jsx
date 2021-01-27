import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ChatCreator = (props) => {
    return (
        <form className="chatBlock__createForm chatBlock__createForm--margin" onSubmit={props.onClick}>
            <input className="chatBlock__createForm__titleInput chatBlock__createForm__titleInput--margin" type="text" placeholder="Введите имя чата" value={props.title} onChange={props.onChange} />
            <input className="sendBtn" type="submit" value="Создать чат" />
            <input className="sendBtn sendBtn--margin" type="button" value="Удалить чат" onClick={props.removeChat}/>
        </form>
    );
};

ChatCreator.propTypes = {
    title: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    removeChat: PropTypes.func.isRequired,
};

export default ChatCreator;
