import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { replyInput } from 'store';

import styled from 'styled-components';

import Button from 'layout/Button';

import { MdReply } from 'react-icons/md';
const MessageReply = ({ id }) => {
    const data = useSelector((state) => state.message);
    const dispatch = useDispatch();
    console.log(data);
    const handleReply = (event) => {
        const selectMessage = data.filter(
            (item) => item.commentId === event.target.id
        )[0];
        const input = `${selectMessage.userName}\n${selectMessage.content}\n(회신)\n`;
        dispatch(replyInput(input));
    };
    return (
        <ReplyBtn id={id} onClick={handleReply}>
            <MdReply />
        </ReplyBtn>
    );
};

const ReplyBtn = styled(Button)`
    color: #b8babe;
`;

export default MessageReply;
