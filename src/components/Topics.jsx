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
          <div key={topic.slug}>
            <li>
              <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
            </li>
          </div>
        );
      })}
    </ul>
  );
}
