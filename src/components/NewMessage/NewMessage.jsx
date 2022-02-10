import { Message } from 'models/message';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_MESSAGE } from 'store';
import styled from 'styled-components';

const NewMessage = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state);
    const [newContent, setNewContent] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        if (newContent.trim().length === 0) {
            return;
        }

        dispatch({
            type: ADD_MESSAGE,
            value: [...data, new Message(newContent)],
        });

        setNewContent('');
    };

    const getCurrentHandler = (event) => {
        const typingContent = event.target.value;

        setNewContent(typingContent);
    };

    const typingCheckHandler = () => {
        const typingContentLength = newContent.trim().length;
        let isTyping;

        if (typingContentLength > 0) {
            isTyping = true;
        } else if (typingContentLength === 0) {
            isTyping = false;
        }

        return isTyping;
    };

    return (
        <UserForm onSubmit={submitHandler}>
            <label htmlFor="newMSG"></label>
            <UserInput
                id="newMSG"
                type="text"
                value={newContent}
                onChange={getCurrentHandler}
                placeholder="Enter message"
            />
            <SendButton type="submit" isTyping={typingCheckHandler()}>
                보내기
            </SendButton>
        </UserForm>
    );
};

const UserForm = styled.form`
    margin: 20px 10px;
    position: relative;
    display: flex;
    width: 75%;
    align-items: center;
    border: 1px solid #e6e6e8;
    border-radius: 2px;
    background-color: #fff;
`;

const UserInput = styled.input`
    padding-left: 10px;
    width: 91%;
    height: 50px;
    border: none;
`;

const SendButton = styled.button`
    top: 10px;
    weight: 36px;
    height: 36px;
    padding: 2px;
    border: 0;
    border-radius: 2px;
    background-color: ${(props) => (props.isTyping ? '#2196F3' : '#e6e6e8')};
    margin-right: 4px;
    cursor: pointer;
    color: #fff;

    :hover {
        background-color: ${(props) => props.isTyping && '#55f'};
    }
`;

export default NewMessage;
