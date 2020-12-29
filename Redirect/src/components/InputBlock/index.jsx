import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import './styles.css';

export default class InputBlock extends React.Component {
    inputType = React.createRef();

    componentDidMount() {
        this.inputType.current.focus();
    }
    render() {
        return <div className="inputWrap">
        <Form onSubmit={this.props.onClick}>
            <InputGroup className="mb-3">
                <Form.Control ref={ this.inputType } type="text" value={this.props.value} onChange={this.props.onChange} />
                <InputGroup.Append>
                    <Button variant="dark" type="submit">Отправить</Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    </div>
    }
}