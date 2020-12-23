import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import Layout from './Layout';
import Profile from './Profile';

export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' render={ () => ( <Redirect to="/chat/1" /> ) } />
                <Route exact path='/chat/:chatId/' render={ obj => <Layout chatId={ Number(obj.match.params.chatId) } /> } />
                <Route exact path='/profile/' component={ Profile } />
            </Switch>
        )
    }
}