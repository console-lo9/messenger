import { nanoid } from 'nanoid';

export class Message {
    constructor(newContent) {
        this.userId = '피카츄';
        this.commentId = nanoid();
        this.userName = '피카츄';
        this.profileImage = 'https://bit.ly/3rGsJOg';
        this.content = newContent;
        this.date = new Date().toLocaleString();
    }
}
