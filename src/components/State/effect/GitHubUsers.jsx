import React, { useEffect, useState } from "react";
import "./GitHubUsers.css";

export default function GitHubUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUsers() {
    try {
      const response = await fetch("http://api.github.com/users");

      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }
  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 3000);
  }, []);

  if (loading) {
    return <p>loading</p>;
  }
  if (!loading) {
    return (
      <div className="users">
        <h1>Github Users</h1>
        <ul>
          {users.map((user) => {
            const { id, avatar_url, login, html_url } = user;

            return (
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <p>{login}</p>
                <a href={html_url} target="_blank" className="profile-btn">
                  Profile
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
