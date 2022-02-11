import Button from 'layout/Button';
import styled, { css } from 'styled-components';

export const UserFormBox = styled.div`
    display: flex;
    width: 97%;
    align-items: center;
    background-color: #f8f8f8;
    margin: 0 auto 1.5%;
    margin-top: 10px;
    height: auto;
`;

export const UserForm = styled.form`
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    height: 100%;
`;

export const UserInput = styled.textarea`
    padding: 10px;
    width: 100%;
    border: 1px solid #e6e5e8;
    border-radius: 2px;
    resize: none;
    overflow-y: hidden;
    line-height: 24px;
    height: ${(props) =>
        props.scrollHeight > 48 ? props.scrollHeight + 'px' : 48 + 'px'};
    max-height: 230px;
    bottom: 0;

    &::placeholder {
        color: #dedee0;
    }
    :hover {
        border: 1px solid #b9babe;
    }

    :focus {
        border: 1px solid #8c8e94;
        outline: none;
    }
`;

export const SendButton = styled(Button)`
    position: absolute;
    bottom: 6px;
    right: 5px;
    background-color: ${({ isTyping }) => (isTyping ? '#2196F3' : '#e6e6e8')};
    cursor: pointer;
    color: #fff;
    ${({ isTyping }) => {
        if (!isTyping) {
            return css`
                &:hover {
                    background-color: #e6e6e8;
                }
            `;
        }
    }}
`;
