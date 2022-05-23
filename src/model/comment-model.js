import {getComment} from '../mock/comment.js';

export default class CommentsModel {
  comments = Array.from({length: 200}, getComment);

  getComments = () => this.comments;
}
