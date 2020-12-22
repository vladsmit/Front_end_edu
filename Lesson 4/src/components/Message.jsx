import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    }
    
    render() {
        return <div style={{ alignSelf: this.props.name === 'Влад' ? 'flex-end' : 'flex-start' }} className="textField">
            <p className="nameTitle">{ this.props.name }</p>
            <p className="msgText">{ this.props.text }</p>
        </div>
    }        
}
