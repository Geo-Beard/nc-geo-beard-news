import { useContext } from "react";
import { UserContext } from "../contexts/User";

export default function Home() {
  const user = useContext(UserContext);

  return (
    <div className="Home">
      <h2>Welcome: {user.user.name}</h2>
      <h3>You are logged in as: {user.user.username}</h3>
      <img
        className="avatar_img"
        src={user.user.avatar_url}
        alt={user.user.name}
      />
    </div>
  );
}
