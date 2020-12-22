import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Layout from './Layout';
import Profile from './Profile';

export default class Router extends React.Component {
    state = {
        regexp: /^\Wchat\W\d+\W$/
    };
    
    render() {
        return (
            <Switch>
                <Route exact path='/' component={ Layout } />
                <Route exact path='/chat/:chatId/' render={ obj => <Layout chatId={ Number(obj.match.params.chatId) } /> } />
                <Route exact path={`'${this.state.regexp}'`} render={ () => <Layout chatId={ 1 } /> } />
                <Route exact path='/profile/' component={ Profile } />
            </Switch>
        )
    }
}