import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleDelete = (id) => {
    const confirm = window.confirm("are you sure delete this user?");
    if (confirm) {
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const rest = users.filter((user) => user._id !== id);
            setUsers(rest);
            console.log("hello");
          }
          console.log(data);
        });
    }
  };
  return (
    <div>
      <h2>This Is Home Section</h2>
      <h3>Available Users: {users.length} </h3>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            Name: {user.name} Email: {user.email}
            <Link to={`/user/${user._id}`}>
              <button>Update</button>
            </Link>
            <button onClick={() => handleDelete(user._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
