import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const MessageSender = (props) => {
    const inputFocus = React.createRef();

    useEffect(() => {
        inputFocus.current.focus();
    }, []);

    return (
        <form className="inputForm" onSubmit={props.onClick}>
            <input className="inputMsg" type="text" value={props.input} ref={inputFocus} onChange={props.onChange} />
            <input className="sendBtn" type="submit" />
        </form>
    );
};

MessageSender.propTypes = {
    input: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default MessageSender;