import React, { useState } from "react";
import "./style.css";
import "./app.css";
import { Users } from "./users";
import Table from "./Table";

export default function App() {
  const [query, setQuery] = useState("");

  const search = (data) => {
    return data.filter(
      (user) =>
        user.first_name.toLowerCase().includes(query) |
        user.last_name.toLowerCase().includes(query) |
        user.email.toLowerCase().includes(query)
    );
  };
  console.log(search(Users));

  const searcHandler = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={searcHandler}
      />
      <Table data={search(Users)} />
    </div>
  );
  y;
}
