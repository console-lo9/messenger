import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_MESSAGE } from 'store/constants/reducer-constants';
import { closeModal } from 'store/modal';
import styled from 'styled-components';
import esc from 'assets/esc-large-nor.svg';

const Modal = ({ title }) => {
    const dispatch = useDispatch();
    const modal = useSelector((state) => state.modal);
    const handleClose = () => {
        dispatch(closeModal());
    };
    const handleDelete = () => {
        dispatch(closeModal());
        dispatch({
            type: REMOVE_MESSAGE,
            payload: modal.id,
        });
    };
    return (
        <DarkBackground>
            <DialogBlock>
                <ModalHeader>
                    <Title>{title}</Title>
                </ModalHeader>
                <ModalContents>
                    <p>{modal.content} 메시지를 삭제하시겠습니까?</p>
                </ModalContents>
                <ModalFooter>
                    <Button onClick={handleClose}>취소</Button>
                    <Button onClick={handleDelete}>삭제</Button>
                </ModalFooter>
                <CloseButton onClick={handleClose} />
            </DialogBlock>
        </DarkBackground>
    );
};
const DarkBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);
`;

const DialogBlock = styled.div`
    position: relative;
    width: 600px;
    background: white;
    border-radius: 4px;
    h3 {
        margin: 0;
        font-size: 1.5rem;
    }
    p {
        font-size: 1.125rem;
    }
`;
const ModalHeader = styled.div`
    padding: 20px;
`;
const Title = styled.h2`
    font-size: 26px;
    font-weight: bold;
`;
const ModalContents = styled.div`
    padding: 0px 20px;
    p {
        font-size: 16px;
    }
`;
const ModalFooter = styled.div`
    padding: 40px 20px 20px;
    display: flex;
    justify-content: flex-end;
`;

const Button = styled.button`
    width: 50px;
    height: 30px;
    border: 2px solid lightgray;
    border-radius: 4px;
    color: #707070;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    cursor: pointer;
    & + & {
        margin-left: 5px;
    }
`;
const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    /* background-color: black; */
    width: 30px;
    height: 30px;
    margin: 10px;
    &:before {
        content: '';
        display: inline-block;
        width: 30px;
        height: 30px;
        overflow: hidden;
        background: url(${esc});
        line-height: 0;
    }
`;
export default Modal;
