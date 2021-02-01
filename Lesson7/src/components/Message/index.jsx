import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Message = (props) => {
    return (
        <div className="textField textField--margin" style={{alignSelf: props.sender === 'Влад' ? 'flex-end' : 'flex-start'}}>
            <p className="textField__nameTitle">{props.sender}</p>
            <input className="textField__deleteBtn textField__deleteBtn--margin" type="button" value="x" onClick={props.removeMessage}/>
            <p className="textField__msgText">{props.text}</p>
        </div>
    );
};

Message.propTypes = {
    text: PropTypes.string,
    sender: PropTypes.string,
    removeMessage: PropTypes.func,
};

export default Message;