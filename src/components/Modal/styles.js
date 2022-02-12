import Button from 'layout/Button';
import esc from 'assets/esc-large-nor.svg';
import styled from 'styled-components';

export const DarkBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.8);
`;

export const DialogBlock = styled.div`
    position: fixed;
    top: 37vh;
    left: 31%;
    width: 39%;
    z-index: 100;
    overflow: hidden;
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
export const ModalHeader = styled.div`
    padding: 20px;
`;
export const Title = styled.h2`
    font-size: 26px;
    font-weight: bold;
`;
export const ModalContents = styled.div`
    padding: 0px 20px;
    p {
        font-size: 16px;
    }
`;
export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 40px 20px 20px;
`;
export const CancelButton = styled(Button)`
    border: 1px solid #e6e5e8;
    color: #8c8e94;
    &:hover {
        border: 1px solid #b7b8bd;
    }
`;
export const DeleteButton = styled(Button)`
    color: white;
`;
export const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
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
