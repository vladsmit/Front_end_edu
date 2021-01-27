import update from 'react-addons-update';
import { ADD_MESSAGE, REMOVE_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT, REMOVE_CHAT } from '../actions/chatActions';

const initStore = {
    messages: {
        1: { text: 'Привет', sender: 'Робот' },
        2: { text: 'Как дела?', sender: 'Робот' },
    },
    chats: {
        1: { title: 'Чат 1', messageList: [1], blink: false },
        2: { title: 'Чат 2', messageList: [2], blink: false },
        3: { title: 'Чат 3', messageList: [], blink: false },
    },
    profile: {
        name: 'Влад',
        city: 'Москва',
        age: 32,
        info: ''
    },
}

export default function chatReducer(store = initStore, action) {
    switch (action.type) {
        case ADD_MESSAGE: {
            const messageId = Object.keys(store.messages).length + 1;
            return update(store, {
                messages: {
                    $merge: {
                        ...store.messages,
                        [messageId]: {
                            text: action.text, sender: action.sender
                        }
                    }
                },
                chats: {
                    $merge: {
                        [action.chatId]: {
                            title: store.chats[action.chatId].title, messageList: [...store.chats[action.chatId].messageList, messageId], blink: action.blink
                        }
                    }
                },
            });
        }
        case REMOVE_MESSAGE: {
            let deleteMsg = store.chats[action.chatId].messageList.find(message => message === action.messageId);
            store.chats[action.chatId].messageList.splice(store.chats[action.chatId].messageList.indexOf(deleteMsg), 1);
            return update(store, {
                chats: {
                    $set: {
                        ...store.chats
                    }
                }
            });
        }
        case ADD_CHAT: {
            let chatId;
            for (let i = 0, j = 1; i < Object.keys(store.chats).length; i++, j++) {
                if (Object.keys(store.chats)[i] != j) {
                    chatId = j;
                    break;
                } else {
                    chatId = Object.keys(store.chats).length + 1;
                }
            }
            return update(store, {
                chats: {
                    $merge: {
                        [chatId]: {
                            title: action.title, messageList: [], blink: false
                        }
                    }
                },
            });
        }
        case REMOVE_CHAT: {
            delete store.chats[action.chatId];
            return update(store, {
                chats: {
                    $set: {
                        ...store.chats
                    }
                },
            });
        }
        default:
            return store;
    }
}