import React from 'react';

import MessageField from './MessageField.jsx';
import '../styles.css';

const messages = [{ title: 'Привет', id: 1 }, { title: 'Как дела?', id: 2 }];

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { addMessage: false };
    }
    buttonClick(event) {
        if (this.state.addMessage) {
            this.setState({ addMessage: false });
            messages.splice(messages.indexOf({ title: 'Нормально', id: 3 }), 1);
        } else {
            this.setState({ addMessage: true });
            messages.push({ title: 'Нормально', id: 3 });
        }
    };
    render() {
        let status = this.state.addMessage ? 'Удалить ответ' : 'Добавить ответ';
        return (
            <div>
                <MessageField className="msgField" messages={messages} />
                <button onClick={this.buttonClick.bind(this)}>{status}</button>
            </div>
        );
    }
}

export default MessageForm