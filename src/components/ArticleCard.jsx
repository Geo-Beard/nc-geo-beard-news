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
      <div className="article-card-meta">
        <p>Comments: {articleCard.comment_count}</p>
        <ArticleVotes articleCard={articleCard} />
        <p>Topic: {articleCard.topic} </p>
        <p>Author: {articleCard.author}</p>
        <p>
          Posted: {moment(articleCard.created_at).format(`DD/MM/YY [at] HH:mm`)}
        </p>
      </div>
      <h4>Comments section:</h4>
      <ArticleComments comments={comments} setComments={setComments} />
      <Comment setComments={setComments} />
    </div>
  );
}
