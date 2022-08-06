import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <Link to="/home">Home</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

export default Navigation;
