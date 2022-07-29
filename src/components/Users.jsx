import { useEffect, useState, useContext } from "react";
import * as api from "../api";
import { UserContext } from "../contexts/User";

export default function ChangeUser() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    api.fetchAllUsers().then((apiUsers) => {
      setUsers(apiUsers);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <p>Loading users...</p>
  ) : (
    <section>
      <h2>Please select user:</h2>
      <ul className="users-list">
        {users.map((user) => {
          return (
            <li key={user.username}>
              <h2>{user.name}</h2>
              <h3>Username: {user.username}</h3>
              <img
                className="avatar-img"
                src={user.avatar_url}
                alt={user.username}
              />
              <button
                onClick={() => {
                  setUser(user);
                }}
              >
                Select
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
