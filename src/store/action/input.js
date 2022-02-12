import { INIT_INPUT, REPLY_INPUT } from 'store/action/types';

export const replyInput = (input) => ({
    type: REPLY_INPUT,
    input,
});
export const initInput = () => ({
    type: INIT_INPUT,
});
