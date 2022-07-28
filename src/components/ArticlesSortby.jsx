import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function ArticlesSortby(children) {
  const [searchParams, setSearchParams] = useSearchParams({});
  const initialOrder = searchParams.get("order");
  const [order, setOrder] = useState(initialOrder === "asc");

  function handleSort(event) {
    const newParams = {
      sort_by: searchParams.get("sort_by"),
      order: searchParams.get("order"),
    };
    if (!newParams.order) delete newParams.order;
    newParams.sort_by = event.target.value;
    setSearchParams(newParams);
  }

  return (
    <section className="articles-sort-by">
      <select
        className="sort-by"
        onChange={handleSort}
        value={searchParams.get("sort_by") ? searchParams.get("sort_by") : ""}
      >
        <option>Sort by...</option>
        <option value="created_at">Date</option>
        <option value="comment_count">Comment count</option>
        <option value="votes">Votes</option>
      </select>
      <button
        className="order"
        onClick={() => {
          const orderDir = order ? "desc" : "asc";
          const newParams = {
            sort_by: searchParams.get("sort_by"),
            order: searchParams.get("order"),
          };
          if (!newParams.sort_by) delete newParams.sort_by;
          newParams.order = orderDir;
          setSearchParams(newParams);
          setOrder(!order);
        }}
      >
        {order ? "\u2191" : "\u2193"}
      </button>
    </section>
  );
}
