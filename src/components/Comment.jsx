import { useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";

export default function Comment({ setComments, success, setSuccess }) {
  const [commentToAdd, setCommentToAdd] = useState({
    username: "",
    body: "",
  });
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  function handleChange(propName, value) {
    setCommentToAdd((currentComment) => {
      return { ...currentComment, [propName]: value };
    });
  }

  function handleSubmit(event) {
    setError(null);
    setSuccess(false);
    event.preventDefault();
    api
      .addNewComment(article_id, commentToAdd)
      .then((comment) => {
        setComments((currentComments) => {
          setSuccess(true);
          return [comment, ...currentComments];
        });
      })
      .catch((error) => {
        setError(error);
      });
    setCommentToAdd({
      username: "",
      body: "",
    });
  }

  return (
    <section className="post-comment">
      <h2>Post comment</h2>
      <form className="comment-form" onSubmit={handleSubmit}>
        <legend>Enter comment for valid user:</legend>
        <div className="comment-form-inputs">
          <div>
            <label htmlFor="username">Username: </label>
            <input
              name="username"
              type="text"
              onChange={(event) => {
                handleChange("username", event.target.value);
              }}
              value={commentToAdd.username}
            />
          </div>
          <div>
            <label htmlFor="body">Comment: </label>
            <input
              name="body"
              type="text"
              onChange={(event) => {
                handleChange("body", event.target.value);
              }}
              value={commentToAdd.body}
            />
          </div>
        </div>
        <button type="submit">Add comment</button>
      </form>
      {success ? <p>Comment posted successfully!</p> : <></>}
      {error ? <p>Sorry - your comment was not added.</p> : <></>}
    </section>
  );
}
