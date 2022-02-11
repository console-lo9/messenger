import { createStore, combineReducers } from 'redux';
import userReducer from './user';
import modal from './modal';
import { ADD_MESSAGE, REMOVE_MESSAGE, REPLY_MESSAGE } from './message';
import { FETCH, INIT_INPUT, REPLY_INPUT } from './constants/reducer-constants';

import input from './inputReducer';

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

const rootReducer = combineReducers({ message, input, modal, userReducer });

const store = createStore(rootReducer);

export default store;
