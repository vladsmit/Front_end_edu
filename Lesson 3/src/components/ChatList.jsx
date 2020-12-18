import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default class ChatList extends React.Component {    
    render() {
        return <div className="chatList">
            <ListGroup>
                <ListGroup.Item action variant="dark">Робот</ListGroup.Item>
                <ListGroup.Item action variant="dark">Чат 1</ListGroup.Item>
                <ListGroup.Item action variant="dark">Чат 2</ListGroup.Item>
                <ListGroup.Item action variant="dark">Чат 3</ListGroup.Item>
            </ListGroup>
        </div>
    }
}