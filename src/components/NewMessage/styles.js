import Button from 'layout/Button';
import styled, { css } from 'styled-components';
import { COLOR } from 'utils/constants/styles';
export const UserFormBox = styled.div`
    position: relative;
    bottom: 0;
    display: flex;
    width: 97%;
    height: auto;
    align-items: center;
    margin: auto 1.5%;
    padding-bottom: 10px;
    background-color: ${COLOR.BACK_GROUND_GREY};
`;

export const UserForm = styled.form`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const UserInput = styled.textarea`
    position: relative;
    bottom: 0;
    padding: 10px;
    width: 100%;
    height: ${(props) =>
        props.scrollHeight > 48 ? props.scrollHeight + 'px' : 48 + 'px'};
    line-height: 24px;
    max-height: 230px;
    border: {
        1px solid ${COLOR.INPUT_LIGHTGRAY};
        radius: 2px;
    }
    resize: none;
    overflow-y: hidden;
    
    &::placeholder {
        color: #dedee0;
    }
    :hover {
        border: 1px solid ${COLOR.HOVER_LIGHTGRAY};
    }
    :focus {
        border: 1px solid ${COLOR.FOCUS_GRAY};
        outline: none;
    }
`;

export const ButtonDiv = styled.div``;
export const SendButton = styled(Button)`
    position: absolute;
    right: 0px;
    bottom: 0px;
    margin-right: 4px;
    margin-bottom: 4px;
    background-color: ${({ isTyping }) =>
        isTyping ? COLOR.BUTTON_BLUE : COLOR.INPUT_LIGHTGRAY};
    color: ${COLOR.WHITE};
    ${({ isTyping }) => {
        if (!isTyping) {
            return css`
                &:hover {
                    background-color: ${COLOR.INPUT_LIGHTGRAY};
                }
            `;
        }
    }}
    cursor: pointer;
`;
