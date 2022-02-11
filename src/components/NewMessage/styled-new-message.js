import styled from 'styled-components';

export const UserFormBox = styled.div`
    position: relative;
    display: flex;
    width: 97%;
    height: 100px;
    align-items: center;
    background-color: #f8f8f8;
    margin: 20px auto 1.5%;
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
    padding-left: 10px;
    width: 100%;
    border: 1px solid #c8c8cc;
    resize: none;
    overflow-y: hidden;
    line-height: 24px;
    height: ${({ scrollHeight }) =>
        scrollHeight > 48 ? scrollHeight + 'px' : 48 + 'px'};
    max-height: 230px;
    bottom: 0;

    :hover {
        box-shadow: 0 0 3px 2px #f00;
        outline: 1px solid rgb(200, 200, 200);
    }

    :focus {
        box-shadow: 0 0 3px 2px #f00;
        outline: 1px solid #343434;
    }
`;

export const SendButton = styled.button`
    position: absolute;
    bottom: 6px;
    right: 0;
    width: 5%;
    height: 36px;
    padding: 2px;
    border: 0;
    border-radius: 2px;
    background-color: ${({ isTyping }) => (isTyping ? '#2196F3' : '#e6e6e8')};
    margin-right: 6px;
    cursor: pointer;
    color: #fff;

    :hover {
        background-color: ${({ isTyping }) => isTyping && '#55f'};
    }
`;
