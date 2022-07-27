import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";
import moment from "moment";

export default function ArticleComments({ comments, setComments }) {
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    api
      .fetchComments(article_id)
      .then((comments) => {
        setComments(comments);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [article_id, setComments]);

  return isLoading ? (
    <p>Loading comments...</p>
  ) : (
    <div className="comments-card">
      <ul className="comments-list">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} className="comment-list-card">
              <div className="comment">
                <p>{comment.body}</p>
                <div className="comment-meta">
                  <p>Author: {comment.author}</p>
                  <p>
                    Posted: {moment(comment.created_at).format(`DD/MM/YY [at] HH:mm`)}
                  </p>
                  <p>Votes: {comment.votes}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
