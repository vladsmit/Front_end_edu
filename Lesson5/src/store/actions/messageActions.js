export const ADD_MESSAGE = '@@message/ADD_MESSAGE';

export const addMessage = (text, sender, chatId) => ({
    type: ADD_MESSAGE,
    text,
    sender,
    chatId,
});