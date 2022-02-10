import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import styled, { useTheme } from 'styled-components';
import Message from './Message';
import MessageRemove from './MessageRemove';

const Messages = () => {
    const data = useSelector((state) => state);

    console.log(data);
    return (
        <ul>
            {data &&
                data.map((item) => (
                    <MessageDiv key={nanoid()}>
                        <Message
                            date={item.date}
                            profileImage={item.profileImage}
                            userName={item.userName}
                            content={item.content}
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
        </ul>
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
