import update from 'react-addons-update';
import { ADD_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT } from '../actions/chatActions';

const initStore = {
    messages: {
        1: { text: 'Привет', sender: 'Робот' },
        2: { text: 'Как дела?', sender: 'Робот' },
    },
    chats: {
        1: { title: 'Чат 1', messageList: [1] },
        2: { title: 'Чат 2', messageList: [2] },
        3: { title: 'Чат 3', messageList: [] },
    },
    profile: {
        name: 'Влад',
        city: 'Москва',
        age: 32,
        info: ''
    }
}

export default function chatReducer (store = initStore, action) {
    switch (action.type) {
        case ADD_MESSAGE: {
            const messageId = Object.keys(store.messages).length + 1;
            return update(store, {
                messages: { $merge: {...store.messages,
                    [messageId]: {
                    text: action.text, sender: action.sender
                }}},
                chats: { $merge: { [action.chatId]: {
                    title: store.chats[action.chatId].title, messageList: [...store.chats[action.chatId].messageList, messageId]
                }}},
            });
        }
        case ADD_CHAT: {
            const chatId = Object.keys(store.chats).length + 1;
            return update(store, {
                chats: { $merge: {
                    [chatId]: {
                        title: action.title, messageList: []
                    }}},
            });
        }
        default:
            return store;
    }
}