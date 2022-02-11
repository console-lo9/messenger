import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { replyInput } from 'store/action/input';
import { MdReply } from 'react-icons/md';

import Button from 'layout/Button';

import styled from 'styled-components';

const MessageReply = ({ id }) => {
    const messageData = useSelector((state) => state.message);
    const dispatch = useDispatch();

    const replyHandler = (event) => {
        const selectMessage = messageData.filter(
            (item) => item.commentId === event.target.id
        )[0];
        const input = `${selectMessage.userName}\n${selectMessage.content}\n(회신)\n`;

        dispatch(replyInput(input));
    };

    return (
        <ReplyBtn id={id} onClick={replyHandler}>
            <MdReply />
        </ReplyBtn>
    );
};

const ReplyBtn = styled(Button)`
    color: #b8babe;
`;

export default MessageReply;
