import * as api from "../api";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Articles() {
  const { topic } = useParams();

  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api
      .fetchAllArticles(topic)
      .then((articles) => {
        setAllArticles(articles);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [topic]);

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
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
