export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGIST = 'REGIST';

const currentUser = '';

const userReducer = (state = currentUser, action) => {
    switch (action.type) {
        case REGIST:
            return (state = action.value);
        case LOGIN:
            return action.userName;
        case LOGOUT:
            if (state === action.value) return '';
        default:
            return state;
    }
};

// 로그인 버튼 누르면 유저아이디 담기고
//localStrorage,
//localStroage => 로그인한 사람의 아이디 값
//로그아웃 누르면 로컬스토리지 값 사라짐

export default userReducer;
