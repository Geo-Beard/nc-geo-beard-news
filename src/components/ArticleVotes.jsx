import { useState } from "react";
import * as api from "../api";

export default function ArticleVotes({ articleCard }) {
  const [upvoted, setUpvoted] = useState(false);
  const [resetUpvote, setResetUpvote] = useState(null);
  const [downvoted, setDownvoted] = useState(false);
  const [resetDownvote, setResetDownvote] = useState(false);
  const [votes, setVotes] = useState(0);
  const [error, setError] = useState(null);

  //UPVOTE BUTTON
  function increaseUpvote() {
    setError(null);
    setVotes((currentVotes) => {
      return currentVotes + 1;
    });
    api.updateArticleVotes(articleCard.article_id, 1).catch((error) => {
      setError(error);
    });
    setUpvoted(true);
    setResetUpvote(true);
  }

  function decreaseUpvote() {
    setError(null);
    setVotes((currentVotes) => {
      return currentVotes - 1;
    });
    api.updateArticleVotes(articleCard.article_id, -1).catch((error) => {
      setError(error);
    });
    setUpvoted(false);
    setResetUpvote(null);
  }

  //DOWNVOTE BUTTON
  function increaseDownvote() {
    setError(null);
    setVotes((currentVotes) => {
      return currentVotes - 1;
    });
    api.updateArticleVotes(articleCard.article_id, -1).catch((error) => {
      setError(error);
    });
    setDownvoted(true);
    setResetDownvote(true);
  }

  function decreaseDownvote() {
    setError(null);
    setVotes((currentVotes) => {
      return currentVotes + 1;
    });
    api.updateArticleVotes(articleCard.article_id, 1).catch((error) => {
      setError(error);
    });
    setDownvoted(false);
    setResetDownvote(null);
  }

  return (
    <div>
      <p>Votes: {articleCard.votes + votes}</p>
      <div className="article-vote-button">
        <button
          disabled={resetUpvote}
          onClick={downvoted ? decreaseDownvote : increaseDownvote}
        >
          {"\u2193"}
        </button>
        <button
          disabled={resetDownvote}
          onClick={upvoted ? decreaseUpvote : increaseUpvote}
        >
          {"\u2191"}
        </button>
      </div>
      {error ? <p>Sorry - your votes were not counted</p> : <></>}
    </div>
  );
}
