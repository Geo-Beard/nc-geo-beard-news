import * as api from "../api";
import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import moment from "moment";
import ArticlesSortby from "./ArticlesSortby";

export default function Articles() {
  const { topic } = useParams();
  const [params] = useSearchParams();
  const [error, setError] = useState(null);
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const order = params.get("order");
    const sort_by = params.get("sort_by");
    setError(null);
    setIsLoading(true);
    api
      .fetchAllArticles(sort_by, order, topic)
      .then((articles) => {
        setAllArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [params, topic]);

  if (error) {
    return <p>Invalid path...</p>;
  } else {
    return isLoading ? (
      <p>Loading all articles...</p>
    ) : (
      <div>
        <ArticlesSortby />
        <ul className="articles-list">
          {allArticles.map((article) => {
            return (
              <div key={article.article_id} className="article-list-card">
                <li>
                  <Link to={`/article/${article.article_id}`}>
                    {article.title}
                  </Link>
                </li>
                <div className="article-votes-comments">
                  <p>Comments: {article.comment_count}</p>
                  <p>Votes: {article.votes}</p>
                  <p>
                    Date:
                    {moment(article.created_at).format(`DD/MM/YY [at] HH:mm`)}
                  </p>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
