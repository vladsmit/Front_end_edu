import React from 'react';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
//import { push } from 'connected-react-router';
import { addChat } from '../actions/chatActions';

class ChatList extends React.Component {    
    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
        //push: PropTypes.func.isRequired,
    };

    renderChats = (chats) => {
        const chatElements = Object.keys(chats).map((chat, i) => (
            <Link key={i} to={`/chat/${chat}`} className="chatList__link">
                    <ListGroup.Item action variant="dark">Чат {chat}</ListGroup.Item>
            </Link>
        ));
        return chatElements;
    }

    /*handleNavigate = (link) => {
        this.props.push(link)
    };*/
    
    render() {
        return <div className="chatList">
            <ListGroup>
                {this.renderChats(this.props.chats)}
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