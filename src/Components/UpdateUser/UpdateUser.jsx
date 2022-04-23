import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  const handleFormUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const updateUser = { name, email };
    const url = `http://localhost:5000/user/${id}`;
    fetch(url, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("User SuccessFully Updated");
        e.target.reset();
        // alert("user added");
      });
  };
  return (
    <div>
      <h2>This is Update user {user.name}</h2>

      <form onSubmit={handleFormUpdate}>
        <input type="text" name="name" required placeholder="Update Name" />
        <br />
        <input type="email" name="email" required placeholder="Update Email" />
        <br />
        <button type="submit"> Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
