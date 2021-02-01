import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';

import { addProfile } from '../store/actions/profileActions';
import { addChat } from '../store/actions/chatActions';
import { addMessage } from '../store/actions/messageActions';
import MessageField from './MessageField';
import Header from './Header';
import ChatList from './ChatList';

const Layout = (props) => {
    useEffect(() => {
        fetch('/src/api/chats.json')
            .then(data => data.json())
            .then(data => {
                data.forEach(chat => {
                    props.addChat(chat.title)
                })
            })

        fetch('/src/api/messages.json')
            .then(data => data.json())
            .then(data => {
                data.forEach(message => {
                    props.addMessage(message.text, message.sender, message.chatId, false)
                })
            })

        fetch('/src/api/profile.json')
            .then(data => data.json())
            .then(data => {
                data.forEach(profile => {
                    props.addProfile(profile.name, profile.city, profile.age, profile.info)
                })
            })
    }, []);

    if (props.chats[props.chatId] === undefined) {
        return <Redirect to="/chat/1" />
    }

    return (
        <div className="mainWrapper">
            <Header chatId={props.chatId} />
            <ChatList chatId={props.chatId} />
            <MessageField chatId={props.chatId} />
        </div>
    );
};

Layout.propTypes = {
    chatId: PropTypes.number.isRequired,
    chats: PropTypes.object,
    addProfile: PropTypes.func,
    addChat: PropTypes.func,
    addMessage: PropTypes.func,
};

Layout.defaultProps = {
    chatId: 1,
};

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addProfile, addChat, addMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);