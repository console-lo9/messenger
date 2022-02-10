import { Message } from 'models/message';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_MESSAGE, INIT_INPUT } from 'store';
import styled from 'styled-components';

const NewMessage = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.message);
    const input = useSelector((state) => state.input);
    const [newContent, setNewContent] = useState('');
    const [scrollHeight, setScrollHeight] = useState('');

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
        dispatch({ type: INIT_INPUT });
    };

    const getCurrentHandler = (event) => {
        const typingContent = event.target.value;
        const currScrollHeight = event.target.scrollHeight;

        setScrollHeight(currScrollHeight);
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
        if (input !== '') {
            setNewContent(input);
        }
    }, [input]);

    return (
        <UserForm onSubmit={submitHandler}>
            <label htmlFor="newMSG"></label>
            <UserInput
                id="newMSG"
                type="text"
                value={newContent}
                onChange={getCurrentHandler}
                placeholder="Enter message"
                scrollHeight={scrollHeight}
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
    width: 78%;
    align-items: center;
    border: 1px solid #e6e6e8;
    border-radius: 2px;
    background-color: #fff;
    height: auto;
`;

const UserInput = styled.textarea`
    padding-left: 10px;
    width: 92%;
    border: none;
    /* resize: none; */
    overflow: none;

    height: ${(props) => props.scrollHeight};

    :hover {
    box-shadow: box-shadow: 0 0 3px 2px #f00;
    outline: 1px solid rgb(200, 200, 200);
    }

    :focus {
    box-shadow: box-shadow: 0 0 3px 2px #f00;
    outline: 1px solid #343434;
    }
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
