import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";

export default function ArticleComments() {
  const [comments, setComments] = useState([]);
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
  }, [article_id]);

  return isLoading ? (
    <p>Loading comments...</p>
  ) : (
    <div className="comments-card">
      <ul className="comments-list">
        {comments.map((comment) => {
          return (
            <div key={comment.comment_id} className="comment-list-card">
              <li>
                <div className="comment">
                  <p>{comment.body}</p>
                  <div className="comment-meta">
                    <p>Author: {comment.author}</p>
                    <p>Posted: {comment.created_at}</p>
                    <p>Votes: {comment.votes}</p>
                  </div>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
