import "./user.css";
import user from "./user.json";
import { UserCard } from "./UserCard";
function App() {
  return (
    <UserCard
      name={user.name}
      age={user.age}
      phone={user.phoneNumber}
      address={user.address}
    ></UserCard>
  );
}

export default App;
