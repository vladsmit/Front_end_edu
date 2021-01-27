import { ADD_MESSAGE, addMessage } from '../actions/messageActions';

export default store => next => action => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (action.sender === 'Влад') {
                setTimeout(() => {
                    store.dispatch(addMessage('Спасибо за ответ!', 'Робот', action.chatId, true));
                }, 1000);
            }
    }
    return next(action);
};