import { Link, useLocation } from "react-router-dom";
import Topics from "./Topics";

export default function Navigator() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <nav className={"nav-bar"}>
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
      </nav>
      <Topics />
    </>
  );
}
