import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class Message extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    }
    
    render() {
        return <div style={{ alignSelf: this.props.sender === 'Влад' ? 'flex-end' : 'flex-start' }} className="textField">
            <p className="nameTitle">{ this.props.sender }</p>
            <p className="msgText">{ this.props.text }</p>
        </div>
    }        
}
