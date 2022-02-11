import { LOGIN, LOGOUT } from 'store/action/types';

const currentUser = '';

const user = (state = currentUser, action) => {
    switch (action.type) {
        case LOGIN:
            return action.userName;
        case LOGOUT:
            if (state === action.value) return '';
        default:
            return state;
    }
};

export default user;
