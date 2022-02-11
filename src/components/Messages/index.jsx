import { useSelector } from 'react-redux';

import Message from './Message';
import MessageRemove from './MessageRemove';
import MessageReply from './MessageReply';
import { nanoid } from 'nanoid';

import * as S from './styles';

const Messages = (props) => {
    const messageData = useSelector((state) => state.message);

    return (
        <S.StyledMessages ref={props.MsgBox}>
            {messageData &&
                messageData.map((item) => (
                    <S.MessageDiv key={nanoid()}>
                        <Message
                            date={item.date}
                            profileImage={item.profileImage}
                            userName={item.userName}
                            content={item.content}
                            date={item.date}
                        >
                            {item.userName}
                        </Message>
                        <S.ButtonBox className="button_box">
                            <MessageReply id={item.commentId} />
                            <MessageRemove
                                id={item.commentId}
                                content={item.content}
                            />
                        </S.ButtonBox>
                    </S.MessageDiv>
                ))}
        </S.StyledMessages>
    );
};

export default Messages;
