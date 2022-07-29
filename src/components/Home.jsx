import { useContext } from "react";
import { UserContext } from "../contexts/User";
import Users from "./Users";
import defaultUser from "../images/default-user.png";

export default function Home() {
  const user = useContext(UserContext);
  const { setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser({
      username: "Guest",
      name: "Guest",
      avatar_url: defaultUser,
    });
  };
  console.log(user);

  return (
    <div>
      <div className="Home">
        <h2>Welcome: {user.user.name}</h2>
        <h3>You are logged in as: {user.user.username}</h3>
        <img
          className="avatar_img"
          src={user.user.avatar_url}
          alt={user.user.name}
        />
        <button
          className="home-logout-user"
          disabled={user.user.username === "Guest"}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <Users />
    </div>
  );
}
