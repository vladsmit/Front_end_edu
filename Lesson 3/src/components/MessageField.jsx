import React from 'react';
import Message from './Message';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

export default class MessageField extends React.Component {
    state = {
        messages: [{text: 'Привет', name: 'Робот'}, {text: 'Как дела?', name: 'Робот'}],
        inputValue: '',
    };
    inputType = React.createRef();

    handleClick = (e) => {
        e.preventDefault();
        this.setState({ messages: [...this.state.messages, {text: this.state.inputValue, name: 'Влад'}] });
        this.setState({ inputValue: '' });
    };

    handleValue = (event) => {
        this.setState({ inputValue: event.target.value });
    };

    componentDidMount() {
        this.inputType.current.focus();
    }

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
            <div className="inputWrap">
                <Form onSubmit={this.handleClick}>
                    <InputGroup className="mb-3">
                        <Form.Control ref={ this.inputType } type="text" value={this.state.inputValue} onChange={this.handleValue} />
                        <InputGroup.Append>
                            <Button variant="dark" type="submit">Отправить</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
            </div>
        </div>
    }
}