import { createStore, combineReducers } from 'redux';
import modal from './modal';

export const FETCH = 'FETCH';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REPLY_MESSAGE = 'REPLY_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export const REPLY_INPUT = 'REPLY_INPUT';
export const INIT_INPUT = 'INIT_INPUT';

export const addMessage = (userId, userName, profileImage, content) => ({
    type: ADD_MESSAGE,
    userId,
    userName,
    profileImage,
    content,
});
export const replyMessage = () => ({ type: REPLY_MESSAGE });
export const removeMessage = (date) => ({ type: REMOVE_MESSAGE, date });

const messageInitialState = [];

const message = (state = messageInitialState, action) => {
    switch (action.type) {
        case FETCH:
            return (state = action.value);

        case ADD_MESSAGE:
            return (state = action.value);

        case REMOVE_MESSAGE:
            return state.filter((item) => item.commentId !== action.payload);
        default:
            return state;
    }
};

export const replyInput = (input) => ({
    type: REPLY_INPUT,
    input,
});
export const initInput = () => ({
    type: INIT_INPUT,
});

const inputInitialState = '';

const input = (state = inputInitialState, action) => {
    switch (action.type) {
        case REPLY_INPUT:
            return (state = action.input);
        case INIT_INPUT:
            return '';
        default:
            return state;
    }
};

const rootReducer = combineReducers({ message, input, modal });
const store = createStore(rootReducer);

export default store;
