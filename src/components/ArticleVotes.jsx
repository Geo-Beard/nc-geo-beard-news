import { useState } from "react";
import * as api from "../api";

export default function ArticleVotes({ articleCard }) {
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const [votes, setVotes] = useState(0);
  const [error, setError] = useState(null);
  //   const [articleVotes, setArticleVotes] = useState(articleCard.votes);

  function increaseVote(event) {
    setError(null);
    event.preventDefault();
    setVotes((currentVotes) => {
      return currentVotes + 1;
    });
    api.updateArticleVotes(articleCard.article_id, 1).catch((error) => {
      setError(error);
    });
    setUpvoted(true);
    setDownvoted(false);
  }

  function decreaseVote(event) {
    setError(null);
    event.preventDefault();
    setVotes((currentVotes) => {
      return currentVotes - 1;
    });
    api.updateArticleVotes(articleCard.article_id, -1).catch((error) => {
      setError(error);
    });
    setDownvoted(true);
    setUpvoted(false);
  }

  //   function resetVote(event) {
  //     setError(null);
  //     event.preventDefault();
  //     setVotes((currentVotes) => {
  //       return currentVotes + articleVotes;
  //     });
  //     api.updateArticleVotes(articleCard.article_id, 0).catch((error) => {
  //       setError(error);
  //     });
  //     setDownvoted(false);
  //     setUpvoted(false);
  //   }

  return (
    <div>
      <p>Votes: {articleCard.votes + votes}</p>
      <div className="article-vote-button">
        <button disabled={downvoted} onClick={decreaseVote}>
          {"\u2193"}
        </button>
        {/* <button onClick={resetVote}>Reset</button> */}
        <button disabled={upvoted} onClick={increaseVote}>
          {"\u2191"}
        </button>
      </div>
      {error ? <p>Sorry - your votes were not counted</p> : <></>}
    </div>
  );
}
