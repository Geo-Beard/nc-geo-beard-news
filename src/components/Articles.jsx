import * as api from "../api";
import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import moment from "moment";

export default function Articles() {
  const { topic } = useParams();
  const [params] = useSearchParams();

  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const order = params.get("order");
    const sort_by = params.get("sort_by");
    setIsLoading(true);
    api
      .fetchAllArticles(sort_by, order, topic)
      .then((articles) => {
        setAllArticles(articles);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [params, topic]);

  return isLoading ? (
    <p>Loading all articles...</p>
  ) : (
    <div>
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
                  Date:{" "}
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
