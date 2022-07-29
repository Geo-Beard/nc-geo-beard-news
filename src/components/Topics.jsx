import * as api from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Topics() {
  const [allTopics, setAllTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api
      .fetchAllTopics()
      .then((topics) => {
        setAllTopics(topics);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <p>Loading all topics...</p>
  ) : (
    <ul className="topics-list">
      {allTopics.map((topic) => {
        return (
          <li key={topic.slug}>
            <Link to={`/articles/${topic.slug}`}>
              {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
