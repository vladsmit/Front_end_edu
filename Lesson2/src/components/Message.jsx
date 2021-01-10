import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {

    const propTypes = {
        text: PropTypes.string.isRequired,
        message: PropTypes.object.isRequired
    };

    return <div className="textField">
        <p className="nameTitle">{ props.message.sender }</p>
        <p className="msgText">{ props.message.text }</p>
    </div>

};

export default Message;