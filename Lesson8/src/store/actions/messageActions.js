export const ADD_MESSAGE = '@@message/ADD_MESSAGE';
export const REMOVE_MESSAGE = '@@message/REMOVE_MESSAGE';

export const addMessage = (text, sender, chatId, blink) => ({
    type: ADD_MESSAGE,
    text,
    sender,
    chatId,
    blink
});

export const removeMessage = (chatId, messageId) => ({
    type: REMOVE_MESSAGE,
    chatId,
    messageId,
});