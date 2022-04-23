import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUser = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    fetch("http://localhost:5000/user", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("User Added SuccessFull");
        e.target.reset();
        // alert("user added");
      });
  };
  return (
    <div>
      <h2>This Is user Section</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" required placeholder="Name" />
        <br />
        <input type="email" name="email" required placeholder="Email" />
        <br />
        <button type="submit"> Submit</button>
      </form>
      <ToastContainer position="top-center" hideProgressBar={false} />
    </div>
  );
};

export default AddUser;
