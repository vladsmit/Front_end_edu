import React from 'react';
import ReactDOM from 'react-dom';

let messages = ['Привет', 'Как дела?'];

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { addMessage: false };
    }
    buttonClick(event) {
        if(this.state.addMessage) {
            this.setState({ addMessage: false });
            messages.splice(messages.indexOf('Нормально'), 1);
        } else {
            this.setState({ addMessage: true });
            messages.push('Нормально');
        }
    };
    render() {
        let status = this.state.addMessage ? 'Удалить ответ' : 'Добавить ответ';
        return (
            <div>
                <MessageField messages={ messages } />
                <button onClick={this.buttonClick.bind(this)}>{ status }</button>
            </div>
        );
    }
}

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
    return props.messages.map(message => <MessageComponent text={ message } />);
};

ReactDOM.render(
    <MessageForm />,
    document.getElementById('root'),
);