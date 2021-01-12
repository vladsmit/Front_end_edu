import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
    return (
        <div className="textField" style={{alignSelf: props.sender === 'Влад' ? 'flex-end' : 'flex-start'}}>
            <p className="nameTitle">{ props.sender }</p>
            <p className="msgText">{ props.text }</p>
        </div>
    );
};

Message.propTypes = {
    text: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired
};

export default Message;