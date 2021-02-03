import { ADD_MESSAGE, addMessage } from '../actions/messageActions';

export default store => next => action => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (action.sender === 'Влад') {
                const timeout = setTimeout(() => {
                    store.dispatch(addMessage('Спасибо за ответ!', 'Робот', action.chatId, true));
                    clearTimeout(timeout);
                }, 1000);
            }
            break;
    }
    return next(action);
};