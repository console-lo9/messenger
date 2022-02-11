import { useDispatch, useSelector } from 'react-redux';

import Message from './Message';
import MessageRemove from './MessageRemove';
import { nanoid } from 'nanoid';
import { replyInput } from 'store';

import styled from 'styled-components';
import NewMessage from 'components/NewMessage/NewMessage';

const Messages = (props) => {
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
                            <ReplyButton
                                className="reply_div"
                                onClick={handleReply}
                                id={item.commentId}
                                type="button"
                                value="답장"
                            />
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
    height: 100%;
    overflow: auto;
    background-color: #f8f8f8;
    padding-bottom: 60px;
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
    display: none;
    position: absolute;
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

const ReplyButton = styled.input`
    margin-right: 5px;
`;

export default Messages;
