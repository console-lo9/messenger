import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Message from './Message';
import MessageRemove from './MessageRemove';

const Messages = () => {
    const data = useSelector((state) => state);

    console.log(data);
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
                        >
                            {item.userName}
                        </Message>
                        <MessageRemove commentId={item.commentId} />
                    </MessageDiv>
                ))}
        </StyledMessages>
    );
};

const StyledMessages = styled.ul`
    width: 80%;
    height: 80%;
    background: rgb(248, 248, 248);
    overflow: auto;
`;
const MessageDiv = styled.div``;

export default Messages;
