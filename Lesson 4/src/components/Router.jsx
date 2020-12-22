import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import Layout from './Layout';
import Profile from './Profile';

export default class Router extends React.Component {
    state = {
        regexp: /[0-9]+/
    };
    
    render() {
        return (
            <Switch>
                <Route exact path='/' render={ () => ( <Redirect to="/chat/1" /> ) } />
                <Route exact path='/chat/:chatId/' render={ obj => <Layout chatId={ Number(obj.match.params.chatId) } /> } />
                <Route path={`'/chat/${this.state.regexp}/'`} render={ () => ( <Redirect to="/chat/1" /> ) } />
                <Route exact path='/profile/' component={ Profile } />
            </Switch>
        )
    }
}