export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const currentUser = '';

const userReducer = (state = currentUser, action) => {
    switch (action.type) {
        case LOGIN:
            return action.userName;
        case LOGOUT:
            if (state === action.value) return '';
        default:
            return state;
    }
};

export default userReducer;
