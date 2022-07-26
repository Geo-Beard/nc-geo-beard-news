import * as api from "../api";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Topics from "./Topics";

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
      <Topics />
      <ul className="articles-list">
        {allArticles.map((article) => {
          return (
            <div key={article.article_id}>
              <li>
                <Link to={`/article/${article.article_id}`}>
                  {article.title}
                </Link>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
