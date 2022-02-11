import { Message } from 'models/message';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_MESSAGE, INIT_INPUT } from 'store';
import {
    SendButton,
    UserForm,
    UserFormBox,
    UserInput,
} from './styled-new-message';

const NewMessage = (props) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.message);
    const input = useSelector((state) => state.input);
    const [newContent, setNewContent] = useState('');
    const [scrollHeight, setScrollHeight] = useState(48);

    const replacedContent = newContent.replace(/(^\s*)|(\s*$)/gi, '');

    const submitHandler = (event) => {
        event.preventDefault();

        if (newContent.trim().length === 0) {
            return;
        }

        dispatch({
            type: ADD_MESSAGE,
            value: [...data, new Message(replacedContent)],
        });

        setNewContent('');
        dispatch({ type: INIT_INPUT });

        //  submit하면 textarea 길이 초기화
        setScrollHeight(0);
        // submit하면 가장 아래로 스크롤
        props.MsgBox.current.scrollTo({
            top: props.MsgBox.current.scrollHeight,
        });
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
        const targetKey = event.keyCode;

        if (targetKey === 13 && !event.shiftKey) {
            event.preventDefault();
            if (typingContentLength === 0) {
                return;
            }
            dispatch({
                type: ADD_MESSAGE,
                value: [...data, new Message(replacedContent)],
            });
            setNewContent('');
            dispatch({ type: INIT_INPUT });
            setScrollHeight(0);

            props.MsgBox.current.scrollTo({
                top: props.MsgBox.current.scrollHeight + 100,
            });
        }
    };

    useEffect(() => {
        if (input !== '') {
            setNewContent(input);
        }
    }, [input]);

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

export default NewMessage;
