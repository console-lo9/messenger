import { FETCH, ADD_MESSAGE, REMOVE_MESSAGE } from 'store/action/types';
const initialState = [];

// const message = (state = initialState, action) => {
//     switch (action.type) {
//         case FETCH:
//             return (state = action.value);
//         case ADD_MESSAGE:
//             return (state = action.value);
//         // return state.concat({
//         //     userId: action.userID,
//         //     userName: action.userName,
//         //     profileImage: action.profileImage,
//         //     content: action.content,
//         //     date: new Date(),
//         // });
//         case REMOVE_MESSAGE:
//             return state.filter((item) => item.commentId !== action.payload);
//         default:
//             return state;
//     }
// };
const messageInitialState = [];

// dispatch({
//     type: ADD_MESSAGE,
//     value: new Message(currentUser, newContent),
// });
const message = (state = messageInitialState, action) => {
    switch (action.type) {
        case FETCH:
            return (state = action.value);

        case ADD_MESSAGE:
            return [...state, action.value];

        case REMOVE_MESSAGE:
            return state.filter((item) => item.commentId !== action.payload);
        default:
            return state;
    }
};

export default message;
