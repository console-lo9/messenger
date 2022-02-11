import { CLOSE_MODAL, CLOSE_WITH_DELETE, OPEN_MODAL } from './types';

export const openModal = (title, content, id) => ({
    type: OPEN_MODAL,
    title,
    content,
    id,
});

export const closeModal = () => ({ type: CLOSE_MODAL });
export const closeWithDelete = () => ({ type: CLOSE_WITH_DELETE });
