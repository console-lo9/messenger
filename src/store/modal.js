export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const CLOSE_WITH_DELETE = 'CLOSE_WITH_DELETE';

export const openModal = (title, content, id) => ({
    type: OPEN_MODAL,
    title,
    content,
    id,
});

export const closeModal = () => ({ type: CLOSE_MODAL });
export const closeWithDelete = () => ({ type: CLOSE_WITH_DELETE });

const initialState = {
    openModal: false,
};

export default function modal(state = initialState, action) {
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
}
