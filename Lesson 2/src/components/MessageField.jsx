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
        return <div className="msgField">
            {msgElements}
            <form className="inputBlock" onSubmit={e => e.preventDefault()}>
                <input className="inputElement" type="text" />
                <input className="sendBtn" type="submit" value="Отправить" onClick={ this.handleClick } />
            </form>
        </div>
    }
}