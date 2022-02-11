import Button from 'layout/Button';
import styled, { css } from 'styled-components';
import { COLOR } from 'utils/constants/styles';
export const UserFormBox = styled.div`
    position: relative;
    display: flex;
    width: 97%;
    align-items: center;
    background-color: ${COLOR.BACK_GROUND_GREY};
    margin: auto 1.5%;
    height: auto;
    padding-bottom: 10px;
`;

export const UserForm = styled.form`
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    height: 100%;
`;

export const UserInput = styled.textarea`
    position: absolute;
    padding: 10px;
    width: 100%;
    border: 1px solid ${COLOR.INPUT_LIGHTGRAY};
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
    margin-right: 0.5rem;
    margin-bottom: 0.3rem;

    background-color: ${({ isTyping }) =>
        isTyping ? COLOR.BUTTON_BLUE : COLOR.INPUT_LIGHTGRAY};
    cursor: pointer;
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
`;
