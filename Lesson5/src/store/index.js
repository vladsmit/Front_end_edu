import { createStore, combineReducers } from 'redux';

import chatReducer from './reducers/chatReducer';

const store = createStore(combineReducers({
    chatReducer,
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;