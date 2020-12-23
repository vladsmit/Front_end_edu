import React from 'react';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { addChat } from '../actions/chatActions';

class ChatList extends React.Component {    
    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
    };
    
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
            <Button className="createButton" variant="dark" type="button" onClick={this.props.addChat}>Создать чат</Button>
        </div>
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);