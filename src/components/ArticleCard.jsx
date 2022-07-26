import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";
import ArticleComments from "./ArticleComments";
import ArticleVotes from "./ArticleVotes";
import Comment from "./Comment";
import moment from "moment";

export default function ArticleCard() {
  const [articleCard, setArticleCard] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const { article_id } = useParams();

  useEffect(() => {
    setError(null);
    api
      .fetchArticle(article_id)
      .then((article) => {
        setArticleCard(article);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [article_id]);

  if (success) {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  } //might not be necessary

  if (error) {
    return <p>Article does not exist...</p>;
  } else {
    return isLoading ? (
      <p>Loading article...</p>
    ) : (
      <div className="article-card">
        <h3>{articleCard.title}</h3>
        <p>{articleCard.body}</p>
        <div className="article-card-meta">
          <p>Comments: {articleCard.comment_count}</p>
          <ArticleVotes articleCard={articleCard} />
          <p>Topic: {articleCard.topic} </p>
          <p>Author: {articleCard.author}</p>
          <p>
            Posted:{" "}
            {moment(articleCard.created_at).format(`DD/MM/YY [at] HH:mm`)}
          </p>
        </div>
        <h4>Comments section:</h4>
        <ArticleComments comments={comments} setComments={setComments} />
        <Comment
          setComments={setComments}
          setSuccess={setSuccess}
          success={success}
        />
      </div>
    );
  }
}
