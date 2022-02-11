import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { replyInput } from 'store';

import styled from 'styled-components';

const MessageReply = ({ id }) => {
    const data = useSelector((state) => state.message);
    const dispatch = useDispatch();
    const handleReply = (event) => {
        const selectMessage = data.filter(
            (item) => item.commentId === event.target.id
        )[0];
        const input = `${selectMessage.userName}\n${selectMessage.content}\n(회신)\n`;
        dispatch(replyInput(input));
    };
    return (
        <ReplyBtn type="button" value="답장" id={id} onClick={handleReply} />
    );
};

const ReplyBtn = styled.input`
    margin-right: 5px;
`;

export default MessageReply;
