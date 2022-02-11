import { nanoid } from 'nanoid';
import { getDate } from 'utils/getDate';

export class Message {
    constructor(userName, newContent) {
        this.userId = userName;
        this.commentId = nanoid();
        this.userName = userName;
        this.profileImage = 'https://bit.ly/3GHB3BK'; //디폴트 이미지 설정하기
        this.content = newContent;
        this.date = getDate(new Date());
    }
}
