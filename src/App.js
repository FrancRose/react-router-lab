import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

import Layout from "./components/UI/Layout";
import User from "./components/User";
import Users from "./components/Users";

function App() {
  const navigate = useNavigate();

  const [users, setUsers] = React.useState([
    { id: "1", fullName: "Bob Vila" },
    { id: "2", fullName: "John Connor" }
  ]);

  const handleRemoveUser = (userId) => {
    setUsers((state) => state.filter((user) => user.id !== userId));

    navigate('/users')
  };

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users users={users} />}>
          <Route
            path=":userId"
            element={<User onRemoveUser={handleRemoveUser} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
