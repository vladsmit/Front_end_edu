import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default class ChatList extends React.Component {    
    render() {
        const { chats } = this.props;
        const chatElements = Object.keys(chats).map((chat, i) => (
            <Link key={i} to={`/chat/${chat}`} className="chatList__link">
                    <ListGroup.Item action variant="dark">Чат {chat}</ListGroup.Item>
            </Link>
        ));
        return <div className="chatList">
            <ListGroup>
                {chatElements}
            </ListGroup>
            <Button className="createButton" variant="dark" type="button" onClick={this.props.createChat}>Создать чат</Button>
        </div>
    }
}