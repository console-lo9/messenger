import { ADD_MESSAGE, REMOVE_MESSAGE, REPLY_MESSAGE } from './types';

export const addMessage = (value) => ({
    type: ADD_MESSAGE,
    value,
});
export const replyMessage = () => ({ type: REPLY_MESSAGE });
export const removeMessage = (date) => ({ type: REMOVE_MESSAGE, date });
