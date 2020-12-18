import React from 'react';
import Message from './Message';
import Input from './Input';

export default class MessageField extends React.Component {
    state = {
        messages: [{text: 'Привет', name: 'Робот'}, {text: 'Как дела?', name: 'Робот'}],
        inputValue: '',
    };

    handleClick = (e) => {
        e.preventDefault();
        this.setState({ messages: [...this.state.messages, {text: this.state.inputValue, name: 'Влад'}] });
        this.setState({ inputValue: '' });
    };

    handleValue = (event) => {
        this.setState({ inputValue: event.target.value });
    };

    componentDidUpdate() {
        if(this.state.messages.length % 2 === 1 && this.state.inputValue === '') {
            this.timeout = setTimeout(() => {
                this.setState({ messages: [...this.state.messages, {text: 'Спасибо за ответ!', name: 'Робот'}] });
            }, 1000);
        }
    };

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        const msgElements = this.state.messages.map((message, i) => <Message key={i} text={message.text} name={message.name}/>)
        return <div className="msgFieldWrap">
            <div className="msgField">
                {msgElements}
            </div>
            <Input onChange={this.handleValue} value={this.state.inputValue} onClick={this.handleClick}/>
        </div>
    }
}