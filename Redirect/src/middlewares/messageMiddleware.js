import { SEND_MESSAGE, sendMessage } from '../actions/messageActions';

export default store => next => (action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            if (action.sender === 'Влад') {
                setTimeout(() => store.dispatch(sendMessage(Object.keys(store.getState().chatReducer.messages).length + 1, 'Спасибо за ответ!', 'Робот', action.chatId)), 1000);
            }
    }
    return next(action);
}