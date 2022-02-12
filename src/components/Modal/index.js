import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_MESSAGE } from 'store/action/types';
import { closeModal } from 'store/action/modal';

import * as S from './styles';

const Backdrop = () => {
    return <S.DarkBackground />;
};

const Overlay = ({ title }) => {
    const modal = useSelector((state) => state.modal);

    const dispatch = useDispatch();

    const closeHandler = () => {
        dispatch(closeModal());
    };

    const deleteHanlder = () => {
        dispatch(closeModal());
        dispatch({
            type: REMOVE_MESSAGE,
            payload: modal.id,
        });
    };

    return (
        <S.DialogBlock>
            <S.ModalHeader>
                <S.Title>{title}</S.Title>
            </S.ModalHeader>
            <S.ModalContents>
                <p>{modal.content} 메시지를 삭제하시겠습니까?</p>
            </S.ModalContents>
            <S.ModalFooter>
                <S.CancelButton size="medium" onClick={closeHandler}>
                    취소
                </S.CancelButton>
                <S.DeleteButton
                    size="medium"
                    color="#a41300"
                    onClick={deleteHanlder}
                >
                    삭제
                </S.DeleteButton>
            </S.ModalFooter>
            <S.CloseButton onClick={closeHandler} />
        </S.DialogBlock>
    );
};

const Modal = ({ title }) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop />,
                document.getElementById('backdrop-root')
            )}

            {ReactDOM.createPortal(
                <Overlay title={title} />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    );
};

export default Modal;
