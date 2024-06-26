import { useState } from "react";
import { useEffect } from "react";
import { User } from "./User";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsers);
  });
  return (
    <>
      {" "}
      <h1>User List</h1>
      <ul>
        {users.map((user) => {
          return <User key={user.id} {...user} />;
        })}
      </ul>
    </>
  );
}

export default App;
