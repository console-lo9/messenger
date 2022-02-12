import { CLOSE_MODAL, OPEN_MODAL } from 'store/action/types';

const initialState = {
    openModal: false,
};

const modal = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                openModal: true,
                title: action.title,
                content: action.content,
                id: action.id,
            };
        case CLOSE_MODAL:
            return { ...state, openModal: false };

        default:
            return state;
    }
};

export default modal;
