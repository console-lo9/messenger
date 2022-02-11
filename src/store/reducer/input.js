import { INIT_INPUT, REPLY_INPUT } from 'store/action/types';

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
export default input;
