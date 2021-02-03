import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const MessageSender = (props) => {
    const inputFocus = React.createRef();

    useEffect(() => {
        inputFocus.current.focus();
    }, []);

    return (
        <form className="msgSender__form" onSubmit={props.onClick}>
            <input className="msgSender__input msgSender__input--margin" type="text" value={props.input} ref={inputFocus} onChange={props.onChange} />
            <input className="sendBtn" type="submit" />
        </form>
    );
};

MessageSender.propTypes = {
    input: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default MessageSender;