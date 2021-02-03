export const ADD_CHAT = '@@chat/ADD_CHAT';
export const REMOVE_CHAT = '@@chat/REMOVE_CHAT';

export const addChat = (title) => ({
    type: ADD_CHAT,
    title,
});

export const removeChat = (chatId) => ({
    type: REMOVE_CHAT,
    chatId
});