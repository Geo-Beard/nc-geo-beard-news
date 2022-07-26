import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";

export default function ArticleCard() {
  const [articleCard, setArticleCard] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    api
      .fetchArticle(article_id)
      .then((article) => {
        setArticleCard(article);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [article_id]);

  return isLoading ? (
    <p>Loading article...</p>
  ) : (
    <div className="article-card">
      <h3>{articleCard.title}</h3>
      <p>{articleCard.body}</p>
      <p>Comments: {articleCard.comment_count}</p>
      <p> Votes: {articleCard.votes}</p>
      <p>Topic: {articleCard.topic} </p>
      <p>Author: {articleCard.author}</p>
      <p>Posted: {articleCard.created_at}</p>
    </div>
  );
}
