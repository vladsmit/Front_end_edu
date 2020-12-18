import React from 'react';
import MessageField from './MessageField';
import Header from './Header';
import ChatList from './ChatList';

export default class Layout extends React.Component {
    render() {
        return <div className="wrapper">
            <Header />
            <ChatList />
            <MessageField />
        </div>
    }
}