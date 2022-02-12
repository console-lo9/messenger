import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { replyInput } from 'store/action/input.js';

import { MdReply } from 'react-icons/md';
import styled from 'styled-components';
import Button from 'layout/Button';
import { COLOR } from 'utils/constants/styles';

const MessageReply = ({ id }) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.message);

    const handleReply = (event) => {
        const selectMessage = data.filter(
            (item) => item.commentId === event.target.id
        )[0];
        const input = `${selectMessage.userName}\n${selectMessage.content}\n(회신)\n`;
        dispatch(replyInput(input));
    };
    return (
        <ReplyBtn type="button" value="답장" id={id} onClick={handleReply}>
            <MdReply />
        </ReplyBtn>
    );
};

const ReplyBtn = styled(Button)`
    margin-right: 5px;
    color: ${COLOR.HOVER_LIGHTGRAY};
`;

export default MessageReply;
