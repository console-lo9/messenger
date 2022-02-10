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

        dispatch({
            type: ADD_MESSAGE,
            value: [...data, new Message(newContent)],
        });
        if (newContent.trim().length === 0) {
            return;
        }

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

    useEffect(() => {
        typingCheckHandler();
    }, [newContent]);

    return (
        <form onSubmit={submitHandler}>
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
        </form>
    );
};

const UserInput = styled.input`
    width: 80%;
    height: 50px;
`;

const SendButton = styled.button`
    weight: 36px;
    height: 36px;
    padding: 0;
    border: 0;
    border-radius: 2px;
    background-color: ${(props) => (props.isTyping ? '#478bff' : '#e6e6e8')};
    margin-right: 4px;
    cursor: pointer;
`;

export default NewMessage;
