import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { initInput } from 'store/action/input';
import { addMessage } from 'store/action/message';
import { Message } from 'models/message';
import { FiSend } from 'react-icons/fi';

import * as S from './styles';

const NewMessage = ({ MsgBox }) => {
    const dispatch = useDispatch();
    const messageData = useSelector((state) => state.message);
    const replyInput = useSelector((state) => state.input);
    const currentUser = useSelector((state) => state.user);
    const [newContent, setNewContent] = useState('');
    const [scrollHeight, setScrollHeight] = useState(48);
    const inputRef = useRef();

    const replacedContent = newContent.replace(/(^\s*)|(\s*$)/gi, '');
    const trimedContent = newContent.trim().length;

    const submitHandler = (event) => {
        event.preventDefault();
        if (trimedContent === 0) {
            return;
        }

        dispatch(addMessage(new Message(currentUser, replacedContent)));
        dispatch(initInput());

        setNewContent('');
        setScrollHeight(0);
    };

    const getCurrentContentHandler = (event) => {
        const typingContent = event.target.value;
        const currScrollHeight = event.target.scrollHeight;

        setScrollHeight(currScrollHeight);
        setNewContent(typingContent);
    };

    const typingCheckHandler = () => {
        const typingContentLength = trimedContent;
        const isTyping = typingContentLength > 0 ? true : false;

        return isTyping;
    };

    const keyDownHandler = (event) => {
        const typingContentLength = trimedContent;
        const targetKey = event.keyCode;

        if (targetKey === 13 && !event.shiftKey) {
            event.preventDefault();
            if (!typingContentLength) {
                return;
            }
            dispatch(addMessage(new Message(currentUser, replacedContent)));
            dispatch(initInput());

            setNewContent('');
            setScrollHeight(0);
        }
    };

    const scrollHandler = () => {
        MsgBox.current.scrollTo({
            top: MsgBox.current.scrollHeight,
        });
    };

    useEffect(() => {
        scrollHandler();
    }, [messageData, scrollHeight]);

    useEffect(() => {
        if (replyInput) {
            setNewContent(replyInput);
            setScrollHeight(96);
            inputRef.current.focus();
        }
    }, [replyInput]);

    return (
        <S.UserFormBox>
            <S.UserForm onSubmit={submitHandler}>
                <label htmlFor="newMSG"></label>
                <S.UserInput
                    id="newMSG"
                    type="text"
                    value={newContent}
                    onChange={getCurrentContentHandler}
                    onKeyDown={keyDownHandler}
                    placeholder="Enter message"
                    scrollHeight={scrollHeight}
                    ref={inputRef}
                />
                <S.SendButton
                    type="submit"
                    isTyping={typingCheckHandler()}
                    color="#478bff"
                    size="mediumSquare"
                >
                    <FiSend />
                </S.SendButton>
            </S.UserForm>
        </S.UserFormBox>
    );
};

export default NewMessage;
