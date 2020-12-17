import React from 'react';
import Message from './Message.jsx';

export default class MessageField extends React.Component {
    state = {
        messages: [{text: 'Привет', name: 'Робот'}, {text: 'Как дела?', name: 'Робот'}],
    };

    handleClick = () => {
        const input = document.querySelector("input");
        this.setState({ messages: [...this.state.messages, {text: input.value, name: 'Влад'}] });
        input.value = '';
    };

    componentDidUpdate() {
        if(this.state.messages.length % 2 === 1) {
            setTimeout(() => {
                this.setState({ messages: [...this.state.messages, {text: 'Спасибо за ответ!', name: 'Робот'}] });
            }, 1000);
        }
    };

    render() {
        const msgElements = this.state.messages.map((message, i) => <Message key={i} text={message.text} name={message.name}/>)
        return <div className="msgField">
            {msgElements}
            <div className="inputBlock">
                <input className="inputElement" type="text" />
                <button className="sendBtn" onClick={ this.handleClick }>Отправить</button>
            </div>
        </div>
    }
}