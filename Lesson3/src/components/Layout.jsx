import React from 'react';

import MessageField from './MessageField';
import Header from './Header';
import ChatList from './ChatList';

const Layout = (props) => {
    return (
        <div className="wrapper">
            <Header />
            <ChatList />
            <MessageField />
        </div>
    );
};

export default Layout;