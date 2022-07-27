import { Link } from "react-router-dom";
import Topics from "./Topics";

export default function Navigator() {
  return (
    <>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
      </nav>
      <Topics />
    </>
  );
}
