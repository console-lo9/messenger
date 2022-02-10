import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import Message from './Message';
import MessageRemove from './MessageRemove';
import { replyInput } from 'store';
import styled from 'styled-components';

const Messages = () => {
    const data = useSelector((state) => state.message);
    const dispatch = useDispatch();

    const handleReply = (event) => {
        const selectMessage = data.filter(
            (item) => item.date === event.target.id
        )[0];
        const input = `${selectMessage.userName}\n${selectMessage.content}\n(회신)\n`;
        dispatch(replyInput(input));
    };

    return (
        <StyledMessages>
            {data &&
                data.map((item) => (
                    <MessageDiv key={nanoid()}>
                        <Message
                            date={item.date}
                            profileImage={item.profileImage}
                            userName={item.userName}
                            content={item.content}
                            date={item.date}
                        >
                            {item.userName}
                        </Message>
                        <MessageRemove id={item.commentId} />

                        <ReplyButton
                            className="reply_div"
                            onClick={handleReply}
                            id={item.date}
                        >
                            답장
                        </ReplyButton>
                        <hr />
                    </MessageDiv>
                ))}
        </StyledMessages>
    );
};

const MessageDiv = styled.div`
    &:hover {
        .reply_div {
            display: block;
        }
    }
`;

const StyledMessages = styled.ul`
    width: 80%;
    height: 80%;
    background: rgb(248, 248, 248);
    overflow: auto;
`;

const ReplyButton = styled.button`
    display: none;
`;
export default Messages;
