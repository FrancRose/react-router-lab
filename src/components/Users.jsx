import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const Users = ({ users }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get("name") || "";

  const handleSearch = (e) => {
    const name = e.target.value;

    if (name) {
      setSearchParams({ name: e.target.value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <h2>Users</h2>

      <input type="text" value={searchTerm} onChange={handleSearch} />

      <ul>
        {users
          .filter((user) =>
            user.fullName.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          )
          .map((user) => (
            <li key={user.id}>
              <Link to={user.id}>{user.fullName}</Link>
            </li>
          ))}
      </ul>

      <Outlet />
    </>
  );
};

export default Users;
