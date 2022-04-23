import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/home/Home";
import AddUser from "./Components/AddUser/AddUser";
import Header from "./Components/Header/Header";
import UpdateUser from "./Components/UpdateUser/UpdateUser";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add/user" element={<AddUser />} />
        <Route path="/user/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
