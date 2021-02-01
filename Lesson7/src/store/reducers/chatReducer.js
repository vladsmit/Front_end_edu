import update from 'react-addons-update';
import { ADD_MESSAGE, REMOVE_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT, REMOVE_CHAT } from '../actions/chatActions';
import { ADD_PROFILE } from '../actions/profileActions';

const initStore = {
    messages: {},
    chats: {},
    profile: {},
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
            const chatId = Object.keys(store.chats).length + 1;
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
        case ADD_PROFILE: {
            return update(store, {
                profile: {
                    $set: {
                        name: action.name,
                        city: action.city,
                        age: action.age,
                        info: action.info
                    }
                }
            });
        }
        default:
            return store;
    }
}