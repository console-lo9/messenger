import { Message } from 'models/message';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initInput } from 'store';
import { ADD_MESSAGE, INIT_INPUT } from 'store';
import styled from 'styled-components';

const NewMessage = (props) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.message);
    const input = useSelector((state) => state.input);
    const [newContent, setNewContent] = useState('');
    const [scrollHeight, setScrollHeight] = useState(48);

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
        dispatch(initInput());
        // dispatch({ type: INIT_INPUT });

        //  submit하면 textarea 길이 초기화
        setScrollHeight(0);
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

    const keyDownHandler = (event) => {
        const typingContentLength = newContent.trim().length;
        if (typingContentLength === 0) return;
        const targetKey = event.keyCode;
        if (targetKey === 13 && !event.shiftKey) {
            dispatch({
                type: ADD_MESSAGE,
                value: [...data, new Message(newContent)],
            });
            setNewContent('');
            dispatch({ type: INIT_INPUT });
            setScrollHeight(0);
        }
    };
    const scrollHandler = () => {
        props.MsgBox.current.scrollTo({
            top: props.MsgBox.current.scrollHeight,
        });
    };
    useEffect(() => {
        if (input !== '') {
            setNewContent(input);
        }
        scrollHandler();
    }, [input, data, scrollHeight]);
    console.log(scrollHeight);
    return (
        <UserFormBox>
            <UserForm onSubmit={submitHandler}>
                <label htmlFor="newMSG"></label>
                <UserInput
                    id="newMSG"
                    type="text"
                    value={newContent}
                    onChange={getCurrentHandler}
                    onKeyDown={keyDownHandler}
                    placeholder="Enter message"
                    scrollHeight={scrollHeight}
                />
                <SendButton type="submit" isTyping={typingCheckHandler()}>
                    보내기
                </SendButton>
            </UserForm>
        </UserFormBox>
    );
};

const UserFormBox = styled.div`
    display: flex;
    width: 97%;
    align-items: center;
    background-color: #f8f8f8;
    margin: 0 auto 1.5%;
    margin-top: 10px;
    height: auto;
`;

const UserForm = styled.form`
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    height: 100%;
`;

const UserInput = styled.textarea`
    padding-left: 10px;
    width: 100%;
    border: 1px solid #c8c8cc;
    resize: none;
    overflow-y: hidden;
    line-height: 24px;
    height: ${(props) =>
        props.scrollHeight > 48 ? props.scrollHeight + 'px' : 48 + 'px'};
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

const SendButton = styled.button`
    position: absolute;
    bottom: 6px;
    right: 0;
    width: 4%;
    height: 36px;
    padding: 2px;
    border: 0;
    border-radius: 2px;
    background-color: ${(props) => (props.isTyping ? '#2196F3' : '#e6e6e8')};
    margin-right: 6px;
    cursor: pointer;
    color: #fff;

    :hover {
        background-color: ${(props) => props.isTyping && '#55f'};
    }
`;

export default NewMessage;
