import { combineReducers } from 'redux';
//import { connectRouter } from 'connected-react-router';
import chatReducer from './chatReducer';

export default combineReducers({
    /*router: connectRouter(history),*/
    chatReducer,
});