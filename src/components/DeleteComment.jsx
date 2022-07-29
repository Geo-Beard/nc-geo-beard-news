import * as api from "../api";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

export default function DeleteComment({ comment }) {
  const [deleteCommentError, setDeleteCommentError] = useState(null);
  const user = useContext(UserContext);

  const handleDelete = (event) => {
    setDeleteCommentError(null);
    api.removeComment(event.target.value).catch((error) => {
      setDeleteCommentError(error);
    });
  };

  return (
    <div className="delete-comment-button">
      <button
        disabled={user.user.username !== comment.author}
        onClick={handleDelete}
        value={comment.comment_id}
      >
        Delete comment
      </button>

      {deleteCommentError ? (
        <p style={{ color: "red" }}>Comment not deleted...</p>
      ) : (
        <></>
      )}
    </div>
  );
}
