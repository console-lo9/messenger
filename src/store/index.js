import { createStore } from 'redux';

export const FETCH = 'FETCT';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REPLY_MESSAGE = 'REPLY_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export const addMessage = (userId, userName, profileImage, content) => ({
    type: ADD_MESSAGE,
    userId,
    userName,
    profileImage,
    content,
});
export const replyMessage = () => ({ type: REPLY_MESSAGE });
export const removeMessage = () => ({ type: REMOVE_MESSAGE });

const initialState = [];

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH:
            return (state = action.value);

        case ADD_MESSAGE:
            return state.concat({
                userId: action.userID,
                userName: action.userName,
                profileImage: action.profileImage,
                content: action.content,
                date: new Date(),
            });
        default:
            return state;
    }
};

const store = createStore(todoReducer);

export default store;
