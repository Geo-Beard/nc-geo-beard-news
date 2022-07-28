export default function ArticlesSortby() {
  return (
    <div className="articles-sort-by">
      <select className="sort-by">
        <option>Sort by...</option>
        <option>Date</option>
        <option>Comment count</option>
        <option>Votes</option>
      </select>
      <button className="order-desc">{"\u2193"}</button>
      <button className="order-asc">{"\u2191"}</button>
    </div>
  );
}
