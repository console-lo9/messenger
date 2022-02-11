import { useSelector } from 'react-redux';
import Message from './Message';
import MessageRemove from './MessageRemove';
import MessageReply from './MessageReply';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

const Messages = (props) => {
    const data = useSelector((state) => state.message);
    console.log(data);

    return (
        <StyledMessages ref={props.MsgBox}>
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
                        <ButtonBox className="button_box">
                            <MessageReply id={item.commentId} />
                            <MessageRemove
                                id={item.commentId}
                                content={item.content}
                            />
                        </ButtonBox>
                    </MessageDiv>
                ))}
        </StyledMessages>
    );
};

const StyledMessages = styled.ul`
    width: 100%;
    height: 90%;
    overflow: auto;
    background-color: #f8f8f8;
    flex: 1 1 0;
`;

const MessageDiv = styled.div`
    position: relative;
    background-color: #f1f1f1;
    &:hover {
        .button_box {
            display: block;
        }
    }
`;

const ButtonBox = styled.div`
    position: absolute;
    display: none;
    top: 50%;
    right: 3%;
    transform: translateY(-60%);
    justify-content: center;

    & > input[type='button'] {
        background-color: aliceblue;
        width: 50px;
        height: 30px;
        border: none;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 255, 0.2);
    }
`;

export default Messages;
