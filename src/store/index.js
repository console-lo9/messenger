import { createStore } from 'redux';

const ADD_MESSAGE = 'ADD_MESSAGE';
const REPLY_MESSAGE = 'REPLY_MESSAGE';
const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export const addMessage = () => ({ type: ADD_MESSAGE });
export const replyMessage = () => ({ type: REPLY_MESSAGE });
export const removeMessage = () => ({ type: REMOVE_MESSAGE });

const todoReducer = (state = { initialData: 0 }, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return [
                ...state,
                {
                    userId: action.id,
                    userName: action.name,
                    profileImage: action.profileImage,
                    content: action.content,
                    date: Date.now(),
                },
            ];

        case REPLY_MESSAGE:
            return [
                ...state,
                {
                    userName: action.name,
                    content: action.content,
                },
            ];
        case REMOVE_MESSAGE:
            return state;

        default:
            return state;
    }
};

const store = createStore(todoReducer);

export default store;
