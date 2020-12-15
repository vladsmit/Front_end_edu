import React from 'react';
import ReactDOM from 'react-dom';

let messages = ['Привет', 'Как дела?'];

const addMessage = () => {
    messages.push('Нормально');
    ReactDOM.render(
        <MessageForm />,
        document.getElementById('root'),
    );  
}

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
    return props.messages.map(message => <MessageComponent text={ message } />);
};

const MessageForm = (props) => <div>
    <MessageField messages={ messages } />
    <button onClick={addMessage}>Нажми для ответа</button>
</div>

ReactDOM.render(
    <MessageForm />,
    document.getElementById('root'),
);