import * as api from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Articles() {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .fetchAllArticles()
      .then((articles) => {
        setAllArticles(articles);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [allArticles]);

  return isLoading ? (
    <p>Loading all articles...</p>
  ) : (
    <ul className="articles-list">
      {allArticles.map((article) => {
        return (
          <div key={article.article_id}>
            <li>
              <Link to={`/articles/${article.article_id}`}>
                {article.title}
              </Link>
            </li>
          </div>
        );
      })}
    </ul>
  );
}
